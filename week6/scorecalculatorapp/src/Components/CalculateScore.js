import React from 'react';
import '../mystyle.css';

function CalculateScore() {
  const name = "Anusha";
  const school = "ABC High School";
  const total = 450;
  const goal = 500;
  const average = total / 5;

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
