import React from 'react';
import Gaming from './smallScreens/Gaming'; // Assuming you renamed the file to Gaming.js
import Careers from './smallScreens/Careers'; // Assuming you renamed the file to Careers.js

const TwoHalvesPage = () => {
  return (
    <div style={{
      display: 'flex',
      height: '75vh',
    }}>
        <Gaming />
        <Careers />
    </div>

  );
};

export default TwoHalvesPage;
