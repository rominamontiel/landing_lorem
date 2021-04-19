import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loading from './pages/loading';

const Home = lazy(() => import('./pages/home'));

const App = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="*" component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
