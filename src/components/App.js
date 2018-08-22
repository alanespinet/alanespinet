import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import PageNotFound from './screens/PageNotFound';

export const history = createHistory();


export default class App extends React.Component {
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}
