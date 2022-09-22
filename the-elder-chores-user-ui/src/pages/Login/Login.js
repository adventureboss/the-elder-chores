import React, { useState } from 'react';
import './Login.css';
import { usePocketbase } from "../../components/Pocketbase";
import { Alert } from "@patternfly/react-core";

const Login = () => {
  const client = usePocketbase();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [register, setRegister] = useState();


  function AddRegister() {
    return (
      <div id="confirmPassword">
        <label>
          <p>Confirm Password</p>
          <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
        </label>
      </div>
    )
  }


  const handleSubmit = async e => {
    e.preventDefault();
    setError(undefined);
    if (confirmPassword) {
      try {
        await client.users.create({
          email: username,
          password: password,
          confirmPassword: confirmPassword,
        });
      } catch (err) {
        if (err.status === 400) {
          setError("Something went wrong")
        }
      }
    } else {
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
  }

  return (
    <div className="login-wrapper">
      <h1>{register ? 'Register' : 'Please Log In'}</h1>
      {error && (
        <Alert isInline variant="danger" title={error} />
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        {register ? AddRegister() : null}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div id="register">
        <p>Need an account?</p>
        <button onClick={setRegister(true)}>Register</button>
      </div>
    </div>
  )
}

export default Login;
