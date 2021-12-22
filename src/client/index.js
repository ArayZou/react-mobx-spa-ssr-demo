import React, {lazy} from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react'
import {getClientStore} from '../store';
import history from './history'
// import {renderRoutes, matchRoutes} from 'react-router-config';

// hydrate 就是表示把服务器端渲染未完成的工作完成，比如说绑定事件
const Counter = lazy(() => import('../containers/Counter'))
const Login = lazy(() => import('../containers/Login'))
const Logout = lazy(() => import('../containers/Logout'))
const Profile = lazy(() => import('../containers/Profile'))
const Notfound = lazy(() => import('../containers/Notfound'))
const Home = lazy(() => import('../containers/Home'))

ReactDOM.render(
    <Provider store={getClientStore()}>
        <Router history={history}>
            <Switch>
                <Route path="/counter" exact component={(props) => <Counter {...props} />} />

                <Route path="/login" exact component={(props) => <Login {...props} />} />

                <Route path="/logout" exact component={(props) => <Logout {...props} />} />

                <Route path="/profile" exact component={(props) => <Profile {...props} />} />

                <Route path="/notfound" exact component={(props) => <Notfound {...props} />} />

                <Route path="/" exact component={(props) => <Home {...props} />} />
            </Switch>
            {/* {renderRoutes(routes)} */}
        </Router>
    </Provider>
    , document.getElementById('root')
);