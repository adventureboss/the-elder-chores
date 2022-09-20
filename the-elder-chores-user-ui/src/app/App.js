import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;
