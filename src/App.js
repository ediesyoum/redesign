import React, { Component } from 'react';
import './styles/App.scss';
import Logo from './assets/img/logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';

import MediaQuery from './components/MediaQuery';
import { slide as Menu } from 'react-burger-menu';

const isMenuOpen = (state) => {
  return state.isOpen;
};

class App extends Component {
  render() {
    return(
          <div>
            <div className="header">
            <div className="home-header"/>
              <MediaQuery size="desktop">
                <Grid fluid>
                  <Row>
                    <Col xs={12}>
                      <Row start="xs">
                        <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className='logo' alt='Eden Syoum - Development & Design' /></a>
                      </Row>
                    </Col>

                    <Col xs={12} className={"navigation-desktop"}>
                      <a href="/">Home</a>
                      <a href="/about">About</a>
                      <a href="/work">Selected Work</a>
                      <a href="/contact">Contact</a>
                    </Col>
                  </Row>
                </Grid>
              </MediaQuery>

            <MediaQuery size="mobile">
              <Grid fluid>
                <Row>
                  <Col xs={12}>
                    <Row start="xs">
                      <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className="logo-sm" alt='Eden Syoum - Development & Design' /></a>
                    </Row>
                  </Col>

                  <Col xs={12}>
                    <Row end="xs">
                      <Menu
                        burgerButtonClassName={ "bm-burger-button-sm" }
                        right={true}
                        width={'70%'}
                        className={"navlinks a"}
                        onStateChange={ isMenuOpen }
                        isOpen={false}>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/work">Selected Work</a>
                        <a href="/contact">Get Connected</a>
                      </Menu>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            </MediaQuery>
        </div>

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
    );
  }
}

export default App;
