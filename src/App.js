import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './styles/App.scss';
import Logo from './assets/img/logo-ec.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import MediaQuery from './components/MediaQuery';
import { slide as Menu } from 'react-burger-menu';

const isMenuOpen = (state) => {
  return state.isOpen;
};

class App extends Component {
  render() {
    return(
      <div>
  				<div className="title">{this.props.title}</div>
                <div className="header">

                  <MediaQuery size="desktop">
                    <Grid>
                      <Row start="xs">
                        <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className="logo" alt='Eden Syoum - Development & Design' /></a>

                        <Col xs className="header_clear">
                          <div className="navlinks">

                            <Row end="xs">
                              <Row>
                                <div>
                                <p><a href="/work">work</a></p>
                                </div>
                              </Row>
                              <Row>
                                <div>
                                  <p><a href="/about" title="about">about</a></p>
                                </div>
                              </Row>
                              <Row>
                                <div>
                                  <p><a href="/contact" title="contact">contact</a></p>
                                </div>
                              </Row>
                            </Row>

                          </div>
                        </Col>

                      </Row>
                    </Grid>
                  </MediaQuery>

                  <MediaQuery size="mobile">
                    <Grid>
                      <Row start="xs">
                        <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className="logo-sm" alt='Eden Syoum - Development & Design' /></a>
                      </Row>

                      <Menu
                        right={true}
                        width={'70%'}
                        className="navlinks a"
                        onStateChange={ isMenuOpen }
                        isOpen={false}>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/work">Work</a>
                        <a href="/contact">Contact</a>
                      </Menu>

                    </Grid>
                  </MediaQuery>

                </div>

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
