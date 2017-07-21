import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Page extends Component {
  render() {
    return (
      <Grid Responsive>
    		<div>
  				<div className="title">{this.props.title}</div>

            <Row around="xs">
              <Col xs={1} lg={1}>
        				<div className="header">
                  <img className="logo" alt='eden syoum' src={logo} />

                  <div className="logo-square"></div>
        				</div>
              </Col>

              <Col xs={12} sm={3} md={2} lg={1}>
                <Row end="xs">
                  <div className="menu"></div>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
        				<div className="content">
        					{this.props.children}
        				</div>
              </Col>
            </Row>

  			</div>
      </Grid>
		);
	}
}
