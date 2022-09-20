import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import '@patternfly/react-core/dist/styles/base.css';
import 'rpg-awesome/css/rpg-awesome.css';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
  </React.StrictMode>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
