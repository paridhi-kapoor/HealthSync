import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const Header = () => {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      {/* <div className="cards-container">
        <Card title="Blood Pressure" />
        <Card title="ECG" />
        <Card title="Heart Rate" />
        <Card title="Temperature" />
      </div> */}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-icon"><img src='./assets/healthsync.png'></img></div>
      <div className="right-icon">👤</div>
    </nav>
  );
};

const Greeting = () => {
  return (
    <div className="greeting">Welcome to Your Dashboard!</div>
  );
};

// const Card = ({ title }) => {
//   useEffect(() => {
//     const ctx = document.getElementById(`${title}-chart`).getContext('2d');
//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//         datasets: [{
//           label: title,
//           data: [120, 130, 125, 140, 135, 130, 125],
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//           fill: false
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }, [title]);

//   return (
//     <div className="card">
//       <canvas id={`${title}-chart`}></canvas>
//     </div>
//   );
// };

export default Header;
