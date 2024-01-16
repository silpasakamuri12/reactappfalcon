// src/App.js
import React from 'react';
import {useSelector} from 'react-redux';
import '@trussworks/react-uswds/lib/index.css'; // Import USWDS styles
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path as needed
import LoginForm from './components/LoginForm'; // Adjust the path as needed
import './styles.css';
function App() {
  const { isAuthenticated, user} = useSelector((state) => state.auth);
  return (
    <Provider store={store}>
      <div className="usa-section">
        <div className="usa-container">
          {/* <h1 className="usa-heading">My React App</h1> */}
          <div className="App">
            <header className="header">
              <h1>DEVAIS</h1>
            </header>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p><b>Welcome to Emploment Verification System</b></p>
            </div>
          </div>
          {isAuthenticated ? <div> <h1>Logged in as {user.payload.email} ({user.payload.name})</h1> </div> : <LoginForm /> }

        </div>
      </div>
    </Provider>
  );
}

export default App;
