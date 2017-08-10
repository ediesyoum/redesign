import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './styles/App.scss';
import Logo from './assets/img/logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import MediaQuery from './components/MediaQuery';
// import { RouteTransition } from 'react-router-transition';

class App extends Component {
  render() {
    return(
      <div>
        <Grid>
  				<div className="title">{this.props.title}</div>

          <Row start="xs">
            <div className="header">

              <MediaQuery size="desktop">

                <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className="logo" alt='Eden Syoum - Development & Design' /></a>

                <div className="logo-bg"></div>

              </MediaQuery>

              <MediaQuery size="mobile">

                <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className="logo-sm" alt='Eden Syoum - Development & Design' /></a>

                <div className="logo-bg-sm"></div>

              </MediaQuery>

            </div>

            <Col xs>
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
