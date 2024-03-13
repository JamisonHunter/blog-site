import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Switch instead of Routes
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
