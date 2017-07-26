import React, { Component } from 'react';
import Logo from '../assets/img/logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import Navigation from '../Navigation';

export default class Page extends Component {
  render() {
    return (
      <Grid>
    		<div>
  				<div className="title">{this.props.title}</div>

          <Row start="xs">
    				<div className="header">
              <img src={Logo} className="logo" alt='eden syoum' />

              <div className="logo-square"></div>
    				</div>

            <Col xs>
              <div className="navlinks a">
                <Row end="xs">
                  <Col>
                    <a href="" target="_blank">work</a>
                  </Col>
                  <Col>
                    <a href="" target="_blank">about</a>
                  </Col>
                  <Col>
                    <a href="" target="_blank">contact</a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
    				<div className="content">
    					{this.props.children}
            </div>
          </Row>

  			</div>
      </Grid>
		);
	}
}
