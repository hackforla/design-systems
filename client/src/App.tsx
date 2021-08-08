import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>All about that Button!</h1>
      <Button onClick={console.log} children={'Hello'} />
      <Button onClick={console.log}>World</Button>
      <Button onClick={console.log} disabled children={'OOOLALA'} />
      <Button onClick={console.log} children={'Medium'} size={'md'} />
      <Button onClick={console.log} children={'Large'} size={'lg'} />
    </div>
  );
}

export default App;
