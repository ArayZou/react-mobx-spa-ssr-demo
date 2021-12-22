import React from 'react';
// 根据不同的路由，显示对应的网页标题和描述
import {Helmet} from 'react-helmet';
import {renderToString} from 'react-dom/server';
import { Provider } from 'mobx-react'
import {getServerStore} from '../store';
import { ServerPage } from '../client/serverIndex'

const helmet = Helmet.renderStatic();

export default function (req, res) {
    // cssArr  收集每一个组件引入的样式
    let context = {cssArr: []};

    // 获取服务端的 store
    let store = getServerStore();
    const list = [{id: 1, name: 'user1'}, {id: 2, name: 'user2'}]
    store.home.setHomeList(list)

    let html = renderToString(
        <Provider store={store}>
            <ServerPage />
        </Provider>
    )
    // console.log(html)

    // 渲染完成之后，再获取 css 样式
    let cssStr = context.cssArr.join('\n');
    console.log(cssStr)
    if (context.action === 'REPLACE') {
        // 重定向状态码是 302
        return res.redirect(302, context.url);
    } else if (context.notFound) {
        // notFound 为 true，那么访问的页面不存在，需要将状态码设置为 404
        // 如果不设置的话，状态码默认是 200
        res.statusCode = 404;
    }
    console.log(html)
    res.send(`
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
            <style>${cssStr}</style>
            </head>
            <body>
            <div id="root">${html}</div>
            <script>
                // 服务端：组件初始化时会请求数据，请求的数据会存到服务端仓库中，然后组件使用数据显示相应内容
                // 客户端：为了避免组件挂载时又一次的请求数据（当服务器端已经请求过数据并返回了有数据的内容） 
                // 所以这里要获取下存在服务端仓库中的数据并作为初始值存到 window 中
                // 俗称：数据的脱水
                window.context = {
                    list:${JSON.stringify(list)}
                }
            </script>
            <script src="/client.js"></script>
            </body>
        </html>`
    );
}
