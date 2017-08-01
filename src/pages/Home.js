import React, { Component } from 'react';
import Content from '../components/Content';
import Shapes from '../assets/img/shapes.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Home extends Component {
  render() {
    return (
      <Content title="Home">
        <Grid>
          <Row>
            <Col xs={12}>
              <Row bottom="xs">
                <Col xs>
                  <img src={Shapes} className="shapes" alt="design & development" />
                </Col>
                <Col xs className="premise">
                    <h1>eden syoum</h1>
                    <h3>web development + design</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Content>
    );
  }
}
