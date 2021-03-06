import React, { Component } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectPage from './components/ProjectPage';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return(
      <div>
        <div className="Site-content scrollbar">

            <header>
              <Navigation/>
            </header>

            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
                <Route path="/work/:id" component={ProjectPage} />
              </div>
            </Router>

        </div>
      </div>
    );
  }
}

export default App;
