import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { Register } from '../pages';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/main_window" element={<Register />} />
      </Switch>
    </Router>
  );
};

export default Routes;
