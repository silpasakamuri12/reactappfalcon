// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authReducer'; // Adjust the path as needed
import '../styles.css';
import '@trussworks/react-uswds/lib/index.css'; 

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Implement authentication logic using Redux actions and reducers
      const user = { username, password };
      console.error('user:', user);
      // Dispatch the login action
      dispatch(login(user));

      // Make the API request to your authentication endpoint
      const response = await fetch('YOUR_AUTH_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      // Handle the response as needed (e.g., store user data in Redux)
      const userData = await response.json();

      // Update Redux state or perform any additional actions based on the response
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle the error (e.g., show an error message to the user)
    }
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
