import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; // change the flag value to false to see odd, even, merged players list
  //const flag = false;
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: '#4b0082' }}> CRICKET APP</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
