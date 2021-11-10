import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
// import Upload from './upload/upload';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    {/* <Route path="/upload" component={Upload} /> */}
  </Switch>
);

export default Router;
