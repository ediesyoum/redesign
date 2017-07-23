import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import 'font-awesome/css/font-awesome.css';
import './styles/App.scss';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
        </div>
      </Router>
    );
  }
}

export default App;
