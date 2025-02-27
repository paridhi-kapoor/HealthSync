import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      {isSidebarVisible && <Sidebar />}
      <Greeting />
      <div className="cards-container">
        <Card title="Blood Pressure" />
        <Card title="ECG" />
        <Card title="Heart Rate" />
        <Card title="Temperature" />
      </div>
    </div>
  );
};

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="left-icon"><img src='./assets/healthsync.png' alt="HealthSync logo" /></div>
      <div className="right-icon" onClick={toggleSidebar}><img src='2750667.png' /></div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src='2750667.png' alt="User" className='user' />
      <li>User Details</li>
      <ul> Email : </ul>
      <ul>Age : </ul>
      <a href="./header.js">Dashboard</a>
      <a href="./appointment.js">Book an Appointment</a>
      <a href="#">Check your Health</a>
      <a href="#">Emergancy</a>
    </div>
  );
};

const Greeting = () => {
  return (
    <div className="greeting">Welcome to Your Dashboard!</div>
  );
};

const Card = ({ title }) => {
  useEffect(() => {
    const ctx = document.getElementById(`${title}-chart`).getContext('2d');
    let chartInstance;

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: title,
          data: [120, 130, 125, 140, 135, 130, 125],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, [title]);

  return (
    <div className="card">
      <canvas id={`${title}-chart`}></canvas>
    </div>
  );
};

export default Header;
