import React, { useState } from 'react';
import config from '../../config'
function AdminLogin() {
  // State to store the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State to track whether login is successful or not
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically perform authentication
    // For demonstration, let's just check if username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      alert('Invalid username or password');
    }
  };

  // If already logged in, show a message
  if (loggedIn) {
    return <div>You are already logged in as admin.</div>;
  }

  // If not logged in, show the login form
  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
