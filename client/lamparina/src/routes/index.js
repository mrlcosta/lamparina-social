import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/index';
import Login from '../pages/login/index';
import Feed from '../pages/feed/index';

function Routes() {
  return (
    <Switch>
      <Route path="/feed" component={Feed} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
