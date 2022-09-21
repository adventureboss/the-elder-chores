import React from 'react';
import ReactDOM from 'react-dom';
import PocketBase from "pocketbase";
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import '@patternfly/react-core/dist/styles/base.css';
import 'rpg-awesome/css/rpg-awesome.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { PocketbaseProvider } from "./components/Pocketbase";

const queryClient = new QueryClient();
const pocketBaseClient = new PocketBase('/');

ReactDOM.render(
  <React.StrictMode>
      <PocketbaseProvider client={pocketBaseClient}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
      </PocketbaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
