import React from 'react';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Categories from './components/Categories';
import Favorited from './components/Favorited';
import Trending from './components/Trending';
import About from './components/About';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/categories" component={Categories} />
          <Route path="/favorited" component={Favorited} />
          <Route path="/trending" component={Trending} />
          <Route path="/about" component={About} />
      </Switch>
    </div>
  <Footer/>
    </Router>
  );
}


export default App;
