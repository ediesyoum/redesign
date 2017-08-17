import React, { Component } from 'react';
import Content from '../components/Content';
import Project from '../components/Project';
import Parallax from 'react-springy-parallax';
import Noise from '../assets/img/noise.png';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Work extends Component {
  render() {
    return (
      <Content title="Work">

          <Project name="jot-it">
            Hi I live in here.
          </Project>

          <Grid>
            <Row>
              <Col start="xs" className="box2"/>
              <Col end="x s" className="box">
                <div>Hi I live in here</div>
              </Col>
            </Row>
          </Grid>

      </Content>
    );
  }
}
