import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2 style={{ color: 'green' }}>Welcome User </h2>
      <p>You can now book your tickets:</p>
      <ul>
        <li>Chennai ✈ Mumbai – ₹4500 <button>Book</button></li>
        <li>Delhi ✈ Hyderabad – ₹5300 <button>Book</button></li>
        <li>Bangalore ✈ Kochi – ₹3700 <button>Book</button></li>
      </ul>
      <button onClick={onLogout} style={{ marginTop: '20px' }}>Logout</button>
    </div>
  );
}

export default UserPage;
