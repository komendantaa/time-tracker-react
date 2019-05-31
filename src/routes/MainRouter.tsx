import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from 'components/main/Main';
import NotFound from 'components/not-found/NotFound';
import TrackerContainer from 'containers/tracker/Tracker.container';

class Router extends React.Component {
  private renderMainWrapper = (Component: PropTypes.ReactComponentLike) => {
    return (
      <Main>
        <Component />
      </Main>
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/tracker"
            render={this.renderMainWrapper.bind(null, TrackerContainer)}
          />
          <Route
            path="/projects"
            render={this.renderMainWrapper.bind(null, NotFound)}
          />
          <Route
            path="/reports"
            render={this.renderMainWrapper.bind(null, NotFound)}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
