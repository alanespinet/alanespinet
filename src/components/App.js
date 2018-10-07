import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Work from './screens/Work';
import Services from './screens/Services';
import Articles from './screens/Press';


import PageNotFound from './screens/PageNotFound';
import Footer from './common/Footer';
import Header from './common/Header';
import PortfolioData from './screens/Portfolio/PortfolioData';
import ScrollToTop from './common/ScrollRestaurant';

export const history = createHistory();


export default class App extends React.Component {

  render(){
    return(
      <Router history={history}>
        <ScrollToTop>
          <div className="app">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/work/webapplications" component={PortfolioData} />
              <Route exact path="/work/websites" component={PortfolioData} />
              <Route exact path="/work/videogames" component={PortfolioData} />
              <Route path="/work" component={Work} />
              <Route path="/articles" component={Articles} />
              <Route path="/services" component={Services} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}
