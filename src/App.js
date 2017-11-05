import React, { Component } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { spring, AnimatedRoute } from 'react-router-transition';
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
        <Navigation/>

            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route path="/work/:id" component={ProjectPage} />
            </AnimatedSwitch>

      </div>
    );
  }
}

export default App;
