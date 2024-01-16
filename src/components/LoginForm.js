// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authReducer'; // Adjust the path as needed
import '../styles.css';
import '@trussworks/react-uswds/lib/index.css';
import {CognitoUserPool, AuthenticationDetails, CognitoUser} from 'amazon-cognito-identity-js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
      var authenticationData = {
        Username : username,
        Password : password,
      };
      var authenticationDetails = new AuthenticationDetails(authenticationData);
      var poolData = {
        UserPoolId : 'us-east-1_vIjf6FkGW',
        ClientId : '1rudt9curt3kqmnon6njks18ge'
      };

      var userPool = new CognitoUserPool(poolData);
      var userData = {
        Username : username,
        Pool : userPool
      };
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          dispatch(login(result.idToken));
        },
        onFailure: function(err) {
          alert(err);
        },

      });



  };

  return (
    <div className="usa-grid">
      <div className="usa-width-one-third" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Login</h2>
        <form>
          <label className="usa-label" htmlFor="username">
            Username:
          </label>
          <input
            className="usa-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label className="usa-label" htmlFor="password">
            Password:
          </label>
          <input
            className="usa-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleLogin} className="usa-button">
            Login
          </button>
        </form>
      </div>
    </div>

  );
};

export default LoginForm;
