import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import About from './pages/About';
import Features from './pages/Features';
import Tools from './pages/Tools';
import Prices from './pages/Prices';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Router>

      <Header />

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/prices">
            <Prices />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>

      <Footer />

    </Router>
    </div>
  );
}

export default App;
