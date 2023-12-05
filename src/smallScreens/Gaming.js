import React from 'react';

const Gaming = () => {
  return (
    <div style={{ flex: 1, backgroundColor: '#2c3e50', padding: '20px', color: '#ecf0f1' }}>
      <h2>Awesome Game Title</h2>
      <img
        src="https://via.placeholder.com/200" // Replace with the actual image URL
        alt="Game Cover"
        style={{ maxWidth: '100%', marginBottom: '20px' }}
      />
      <p>
        Welcome to the exciting world of Gaming! Dive into the adventure of our awesome game. This is a brief description of the game and its features.
      </p>
    </div>
  );
};

export default Gaming;
