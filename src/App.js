import React from 'react';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Categories from './components/Categories';
import Favorited from './components/Favorited';
import Trending from './components/Trending';
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/categories" component={Categories} />
          <Route path="/favorited" component={Favorited} />
          <Route path="/trending" component={Trending} />
          <Route path="/about" component={About} />
      </Switch>

      <header className="App-header">
      <div>
        <h1>Off White</h1>
      </div>
      </header>
      <Home />
    </div>
    </Router>
  );
}


export default App;
