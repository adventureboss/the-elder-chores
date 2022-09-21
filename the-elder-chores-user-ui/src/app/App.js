import * as React from 'react';
import { useQuery } from "react-query";
import { usePocketbase } from '../components/Pocketbase';
import '@patternfly/react-core/dist/styles/base.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './AppLayout';
import AppRoutes from './AppRoutes';

const App = () => {

  const client = usePocketbase();

  const getUser = async()=>{
    return client.authStore.model
  }

  const userQuery = useQuery("user", getUser);

  if(userQuery.isLoading){
    return(
      <div>
       LOADING....
      </div>
    )
  }
  if (userQuery.isError) {
    return (
      <div>
        {userQuery.error?.message}
      </div>
    )
  }

  const user = userQuery.data

  return (
    <Router>
      <AppLayout user={user}>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;
 