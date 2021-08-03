import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomeController from './components/HomeController';
import VideoJs from './components/VideoJs';
import NoPageFound from './components/NoPageFound';
import PublicRoute from './hoc/PublicRoute';
import { APP_ROUTES } from './utils/enums';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from={APP_ROUTES.ROOT} to={APP_ROUTES.HOME} />
          <PublicRoute
            exact
            path={APP_ROUTES.HOME}
            component={HomeController}
          />
          <Route exact path={APP_ROUTES.VIDOEJS} component={VideoJs} />
          <Route path={APP_ROUTES.ROOT} component={NoPageFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
