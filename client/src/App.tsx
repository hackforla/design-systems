import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>All about that Button!</h1>
      <Button children={'Hello'} />
      <Button>World</Button>
      <Button disabled={true} children={'OOOLALA'} />
    </div>
  );
}

export default App;
