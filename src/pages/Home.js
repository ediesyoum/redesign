import React, { Component } from 'react';
import Page from '../templates/Page';
import Shapes from '../assets/img/shapes.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">
        <Grid>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs>
                  <img src={Shapes} className="box2" alt="design & development" />
                </Col>
                <Col xs className="devdesign">
                    <h1>eden syoum</h1>
                    <h3>web development  +  design</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }
}
