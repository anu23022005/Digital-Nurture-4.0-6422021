import React from 'react';

const players = [
  { name: "Virat", score: 85 },
  { name: "Rohit", score: 65 },
  { name: "Gill", score: 75 },
  { name: "Dhoni", score: 50 },
  { name: "Pant", score: 90 },
  { name: "Hardik", score: 45 },
  { name: "Bumrah", score: 95 },
  { name: "Jadeja", score: 80 },
  { name: "Ashwin", score: 60 },
  { name: "Shami", score: 55 },
  { name: "Kohli", score: 100 }
];

const ListofPlayers = () => {
  const filtered = players.filter(player => player.score < 70); 

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
      <h2 style={{ color: '#0b5394' }}>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - <strong>{p.score}</strong></li>
        ))}
      </ul>

      <h3 style={{ color: '#990000' }}>Players with Score below 70:</h3>
      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - <strong>{p.score}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
