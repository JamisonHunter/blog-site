import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post'; 
import Articles from './components/Articles';
import Banner from './components/Banner'; 

function App() {
  return (
    <Router>
      <Header />
      <Banner/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post/:postId" component={Post} /> 
        <Route path="/articles" component={Articles} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
