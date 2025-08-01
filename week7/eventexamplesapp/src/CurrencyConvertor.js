import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid amount in INR");
      return;
    }

    const conversionRate = 0.011; 
    const converted = (rupees * conversionRate).toFixed(2);
    setEuro(converted);
  };

  return (
    <div>
      <h2 style={{ color: 'green', fontWeight: 'bold' }}>Currency Convertor!!!</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Amount (INR):</label>
        <input
          type="text"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Currency (EUR):</label>
        <input
          type="text"
          value={euro}
          readOnly
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CurrencyConvertor;
