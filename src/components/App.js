import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Work from './screens/Work';

import PageNotFound from './screens/PageNotFound';
import Footer from './common/Footer';
import Header from './common/Header';

export const history = createHistory();


export default class App extends React.Component {
  render(){
    return(
      <Router history={history}>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
