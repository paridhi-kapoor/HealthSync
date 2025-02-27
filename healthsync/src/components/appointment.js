import React from 'react';

const AppointmentPage = () => {
  return (
    <div className="appointment-page">
      <h1>Book Your Appointment</h1>
      <div className="appointment-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="date">Appointment Date:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="time">Appointment Time:</label>
        <input type="time" id="time" name="time" />

        <button type="submit">Book Appointment</button>
      </div>
      <div className="appointment-image">
        <img src="./assets/appointment.jpg" alt="Appointment" />
      </div>
    </div>
  );
};

export default AppointmentPage;
