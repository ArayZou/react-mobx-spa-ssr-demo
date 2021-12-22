import React, {lazy, Suspense} from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home'
import App from '../containers/App';
import history from './history'

export const ServerPage = () => {
  return (
    <App>
      <Router history={history}>
          <Switch>
            <Route component={(props) => <Home {...props} />} />
          </Switch>
      </Router>
    </App>
  )
}