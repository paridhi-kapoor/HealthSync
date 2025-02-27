import React, { useState, useEffect } from 'react';
import LoginPage from './components/login/loginpage';
import Loading from './components/loading';
import Header from './components/header';
import Checkup from './components/checkup'; // New Checkup section
import Footer from './components/footer'; // Footer added
import AppointmentPage from './components/appointment';
import './App.css';

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
        <Loading />
      ) : (
        <>
          {!isAuthenticated ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
            <>
              <Header />
              <Checkup /> {/* Checkup section placed here */}
              <AppointmentPage/>
              <Footer /> {/* Footer at the bottom */}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;

