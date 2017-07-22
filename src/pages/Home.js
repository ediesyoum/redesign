import React, { Component } from 'react';
import Page from '../templates/Page';
import Wave from '../assets/img/wave.svg';
import { Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <Row>
          <Col xs>
            <img className="wave" alt='Wave' src={Wave} />

            <div className="rectangle__teal"></div>

            <div className="rectangle__pink"></div>

            <div className="circle-wrapper">
              <div className="circle"></div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs>
            <div className="devdesign">
              <h3>web development + design</h3>
            </div>
          </Col>
        </Row>
      </Page>
    );
  }
}
