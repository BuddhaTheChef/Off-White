import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <header className="App-header">
      <div>
        <h1>Off White</h1>
      </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
