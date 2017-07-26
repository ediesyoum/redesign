import React, { Component } from 'react';
import Page from '../templates/Page';
import { Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <Row>
          <Col xsOffset={1} xs={11}>
            <div className="box1"></div>
          </Col>
          <Col xsOffset={11} xs={1}>
            <div className="box2"></div>
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
