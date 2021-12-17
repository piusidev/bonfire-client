import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { ThemeContext } from '../contexts/theme-context';

const Routes: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button type="button" onClick={() => toggleTheme()}>
      Clique
    </button>
  );
};

export default Routes;
