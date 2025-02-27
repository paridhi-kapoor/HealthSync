import React from 'react';

const Checkup = () => {
  return (
    <div className="checkup-container">
      <h2>Health Checkup</h2>
      <p>Monitor your vitals and stay healthy!</p>
      
      {/* Image section */}
      <div className="doc-img">
        <img src="femaledoc.png" alt="Doctor" />
      </div>
    </div>
  );
};

export default Checkup;
