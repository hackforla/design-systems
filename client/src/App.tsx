import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>All about that Button!</h1>
      <Button onClick={console.log} children={'Hello'} />
      <Button onClick={console.log}>World</Button>
      <Button onClick={console.log} children={'OOOLALA'} disabled />
      <Button onClick={console.log} children={'Medium'} size={'md'} />
      <Button onClick={console.log} children={'Large'} size={'lg'} />

      <Button onClick={console.log} variant={'secondary'} children={'Small'} />
      <Button
        onClick={console.log}
        variant={'secondary'}
        children={'Disabled'}
        disabled
      />
      <Button
        onClick={console.log}
        variant={'secondary'}
        children={'Medium'}
        size={'md'}
      />
      <Button
        onClick={console.log}
        variant={'secondary'}
        children={'Large'}
        size={'lg'}
      />
    </div>
  );
}

export default App;
