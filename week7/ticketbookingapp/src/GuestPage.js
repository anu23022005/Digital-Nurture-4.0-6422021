import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2 style={{ color: '#007acc' }}>Welcome Guest </h2>
      <p>Here are some available flights:</p>
      <ul>
        <li>Chennai ✈ Mumbai – ₹4500</li>
        <li>Delhi ✈ Hyderabad – ₹5300</li>
        <li>Bangalore ✈ Kochi – ₹3700</li>
      </ul>
      <button onClick={onLogin} style={{ marginTop: '10px' }}>Login to Book</button>
    </div>
  );
}

export default GuestPage;
