import React from 'react';
import './App.css';
import './Grid.css'; 
import { CohortsData } from './Cohort';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Arial', color: '#333' }}>
        Cohort Dashboard
      </h1>
      <div className="grid-container">
        {CohortsData.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
