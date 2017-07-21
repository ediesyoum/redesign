import React, { Component } from 'react';
import Page from '../templates/Page';
import Wave from '../assets/img/wave.svg';
import { Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <Col xs={1} s={1} md={1} lg={1}>
          <img className="wave" alt='Wave' src={Wave} />

          <div className="rectangle__teal"></div>

          <div className="rectangle__pink"></div>

          <div className="circle"></div>
        </Col>

        <div className="devdesign">
          <Row>
            <Col xs={12} lg={12}>
                <h3>web development + design</h3>
            </Col>
          </Row>

        </div>

      </Page>
    );
  }
}
