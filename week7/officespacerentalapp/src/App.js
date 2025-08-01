import React from 'react';
import './App.css'; 

function App() {
  const office = {
    name: "Sunrise Tower",
    rent: 55000,
    address: "123 Business Street, Chennai",
    image: "/officepic.webp"
  };

  const officeList = [
    {
      name: "Sunrise Tower",
      rent: 55000,
      address: "123 Business Street",
    },
    {
      name: "Moonlight Plaza",
      rent: 75000,
      address: "456 Commercial Ave",
    },
    {
      name: "Skyline Heights",
      rent: 62000,
      address: "789 Corporate Road",
    },
    {
      name: "BudgetSpace",
      rent: 40000,
      address: "101 Economy Lane",
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      
      <h1 style={{ color: '#2c3e50' }}>Office Space Rental Portal</h1>
      
      <img src={office.image} alt="Office" style={{ width: '300px', height: '200px', borderRadius: '10px' }} />

      
      <div style={{ marginBottom: '30px' }}>
        <h2>{office.name}</h2>
        <p><strong>Rent:</strong> ₹{office.rent}</p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>

      <h2>Available Office Listings</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ 
            marginBottom: '15px', 
            padding: '10px', 
            border: '1px solid #ccc', 
            borderRadius: '6px',
            listStyle: 'none'
          }}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Address:</strong> {item.address} <br />
            <strong>Rent: </strong>
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              ₹{item.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
