import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'mobx-react'
import App from '../containers/App';
import {getClientStore} from '../store';
import history from './history'

// hydrate 就是表示把服务器端渲染未完成的工作完成，比如说绑定事件
class LazyLoad extends React.Component {
    constructor(props) {
      super(props)
      let Component = null
      switch (props.pageName) {
        case 'Counter':
          Component = lazy(() => import(/* webpackChunkName: "Counter" */ '../containers/Counter'))
          break
        case 'Login':
          Component = lazy(() => import(/* webpackChunkName: "Login" */ '../containers/Login'))
          break

        case 'Logout':
            Component = lazy(() => import(/* webpackChunkName: "Logout" */ '../containers/Logout'))
            break

        case 'Profile':
            Component = lazy(() => import(/* webpackChunkName: "Profile" */ '../containers/Profile'))
            break

        case 'Notfound':
            Component = lazy(() => import(/* webpackChunkName: "Notfound" */ '../containers/Notfound'))
            break

        case 'Home':
            Component = lazy(() => import(/* webpackChunkName: "Home" */ '../containers/Home'))
            break
        default:
      }
  
      this.state = {
        Component
      }
    }
  
    render() {
      const { Component: Comp } = this.state
      const { pageName, ...rest } = this.props
      return (
        <Suspense fallback={<div>loading</div>}>
          <Comp {...rest} />
        </Suspense>
      )
    }
  }
export const Page = () =>  {
  return(
    <App>
        <Router history={history}>
            <Switch>
                <Route path="/counter" exact component={(props) => <LazyLoad pageName="Counter" {...props} />} />
                <Route path="/login" exact component={(props) => <LazyLoad pageName="Login" {...props} />} />
                <Route path="/logout" exact component={(props) => <LazyLoad pageName="Logout" {...props} />} />
                <Route path="/profile" exact component={(props) => <LazyLoad pageName="Profile" {...props} />} />
                <Route path="/notfound" exact component={(props) => <LazyLoad pageName="Notfound" {...props} />} />
                <Route path="/" exact component={(props) => <LazyLoad pageName="Home" {...props} />} />
            </Switch>
        </Router>
    </App>
  )
}
setTimeout(() => {
  ReactDOM.hydrate(
    <Provider store={getClientStore()}>
      <Page />
    </Provider>
    , document.getElementById('root')
  );
}, 1000)
