
import LoginPage from './components/login/loginpage';
import Loading from './components/loading';
import Header from './components/header';
import React, { useState, useEffect } from 'react';
import './App.css';
import AppointmentPage from './components/appointment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          {!isAuthenticated ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
            <Header/>
            
          )}
        </>
      )}
    </div>
  );
}

export default App;

