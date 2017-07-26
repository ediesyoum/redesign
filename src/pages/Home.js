import React, { Component } from 'react';
import Page from '../templates/Page';
import { Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <Row>
          <Col xs>
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
