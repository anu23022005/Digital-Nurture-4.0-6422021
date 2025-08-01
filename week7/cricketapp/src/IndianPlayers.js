import React from 'react';

const IndianPlayers = () => {
  const OddTeam = ["Virat", "Gill", "Pant", "Jadeja", "Ashwin"];
  const EvenTeam = ["Rohit", "Dhoni", "Hardik", "Shami", "Kohli"];

  const [p1, p2, p3, ...restOdd] = OddTeam; 
  const [q1, q2, q3, ...restEven] = EvenTeam;

  const T20players = ["Virat", "Rohit", "Hardik"];
  const RanjiTrophy = ["Pujara", "Saha", "Manoj"];

  const merged = [...T20players, ...RanjiTrophy]; 

  return (
    <div style={{ padding: '20px', backgroundColor: '#e6ffe6', borderRadius: '8px' }}>
      <h2 style={{ color: '#006600' }}>Odd Team Players:</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        {restOdd.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h2 style={{ color: '#3333cc' }}>Even Team Players:</h2>
      <ul>
        <li>{q1}</li>
        <li>{q2}</li>
        <li>{q3}</li>
        {restEven.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h3 style={{ color: '#800000' }}>Merged Players (T20 + Ranji):</h3>
      <ul>
        {merged.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
