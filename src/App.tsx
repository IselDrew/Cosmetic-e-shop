import React from 'react';
import logo from './logo.svg';
import './App.css';

const App:React.FC = () => {
  const title: string = 'Here will be a cosmetic shop';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{title}</h3>
      </header>
    </div>
  );
};

export default App;
