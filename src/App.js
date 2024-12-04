import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the message
  const [message, setMessage] = useState('This is a deployed project for IOT & CC ISE Submission');

  // Function to change the message to "Hello World"
  const handleClick = () => {
    setMessage('Hello World');
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={handleClick}>Press me!</button>
    </div>
  );
}

export default App;
