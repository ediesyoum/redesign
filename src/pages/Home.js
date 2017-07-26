import React, { Component } from 'react';
import Page from '../templates/Page';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <Grid>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs className="box2" />
                <Col xs className="devdesign">
                    <h1>eden syoum</h1>
                    <h3>web development + design</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>

      </Page>
    );
  }
}
