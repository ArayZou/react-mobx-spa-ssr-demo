import React, {Component} from 'react';
import { inject, observer } from 'mobx-react'
import {Helmet} from 'react-helmet';


@inject('store')
@observer
class Home extends Component {
    constructor(props) {
        super(props)
        console.log('Home 组件即将挂载');
        const {home} = props.store;
        if (!home.list || !home.list.length) {
            home.getHomeList();
        }
    }

    // componentDidMount 在服务器端是不执行的
    componentDidMount() {
        console.log('componentDidMount, 你看我在服务端执不执行');
    }

    render() {
        const {home} = this.props.store;
        return (
            <>
                <Helmet>
                    <title>React-SSR</title>
                    <meta name="description" content="首页描述"/>
                </Helmet>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="list-group">
                            {
                                home.list.map(item => (
                                    <li key={item.id} className="list-group-item">{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

// Home = connect(
//     state => state.home,
//     actions
// )(Home);
// 此方法是用来异步加载数据的方法，用这个方法可以加载数据并且放到仓库中去
// Home.loadData = function (store) {
//     return store.dispatch(actions.getHomeList());
// };
export default Home;