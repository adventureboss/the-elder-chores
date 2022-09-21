import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@patternfly/react-core";
import './Login.css';
import { usePocketbase } from '../../components/Pocketbase';

const Login = () => {

  const client = usePocketbase();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showHelperText, setShowHelperText] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(password.length >= 10);
    setShowHelperText(!isValidUsername || !isValidPassword);
    await client.users.authViaEmail(username, password);
    navigate("/");
  }

  return(
    <LoginForm
      showHelperText={showHelperText}
      helperText="Invalid login credentials. Username can't be blank. Password must have at least 10 characters."
      usernameLabel="Username"
      usernameValue={username}
      onChangeUsername={handleUsernameChange}
      isValidUsername={isValidUsername}
      passwordLabel="Password"
      passwordValue={password}
      onChangePassword={handlePasswordChange}
      isValidPassword={isValidPassword}
      onLoginButtonClick={handleSubmit}
      loginButtonLabel="Log in"
    />
  )
}

export default Login;
