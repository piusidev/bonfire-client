import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { RegisterTemplate } from '../templates';

const Routes: React.FC = () => {
  return <RegisterTemplate />;
};

export default Routes;
