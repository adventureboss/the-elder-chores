import React, { useState } from 'react';
import './Login.css';
import {usePocketbase} from "../../components/Pocketbase";
import {Alert} from "@patternfly/react-core";

const Login = () => {
  const client = usePocketbase();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(undefined);
    try {
      await client.users.authViaEmail(username, password);
    } catch (err) {
      if (err.status === 400) {
        setError("Invalid username or password.");
      } else {
        setError("Something wrong happened when trying to login. Please try again.");
      }
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      { error && (
        <Alert isInline variant="danger" title={error} />
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
