<<<<<<< HEAD
import React, { useState } from 'react';

const RegistrationAndLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { username, password };

    if (isRegistering) {
      try {
        // Perform registration logic by sending a POST request to the backend
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          console.log('User registered successfully');
          // Redirect to login page or perform other actions
        } else {
          console.error('Registration failed');
          // Handle registration error
        }
      } catch (error) {
        console.error('Error occurred during registration:', error);
        // Handle registration error
      }
    } else {
      try {
        // Perform login logic by sending a POST request to the backend
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          console.log('User logged in successfully');
          // Redirect to user profile or perform other actions
        } else {
          console.error('Login failed');
          // Handle login error
        }
      } catch (error) {
        console.error('Error occurred during login:', error);
        // Handle login error
      }
    }
  };

  return (
    <div>
      <h2>{isRegistering ? 'User Registration' : 'User Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
};

export default RegistrationAndLoginPage;
=======
import React from "react";

function Login() {
  return (
    <div>
       This is Login.
    </div>
  );
}

export default Login;
>>>>>>> 7211d6502103404ed127c3bc12a620568d18e8c9
