import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/home';
import AboutUs from './about-us/about-us';
import Upload from './upload/upload';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={AboutUs} />
    <Route path="/upload" component={Upload} />
  </Switch>
);

export default routes;
