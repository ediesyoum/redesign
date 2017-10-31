import React, { Component } from 'react'
import Logo from '../assets/img/logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from './MediaQuery';
import { slide as Menu } from 'react-burger-menu';

const isMenuOpen = (state) => {
  return state.isOpen;
};
export default class Navigation extends Component {
  render() {
    return (
        <div className="header nav">
          <MediaQuery size="desktop">
            <Grid fluid>
              <Row>
                <Col xs>
                  <Row start="xs">
                    <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className='logo--lg' alt='Eden Syoum - Development & Design' /></a>
                  </Row>
                </Col>
                <Col xs className={"nav__links--desktop"}>
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
                <Col xs>
                  <Row start="xs">
                    <a href="/" title="Eden Syoum - Development & Design"><img src={Logo} className="logo" alt='Eden Syoum - Development & Design' /></a>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row end="xs">
                    <Menu
                      burgerButtonClassName={ "bm-burger-button-sm" }
                      right={true}
                      width={'70%'}
                      className={'nav__links'}
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
    )
  }
}
