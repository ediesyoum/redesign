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
        <div>
          <Parallax ref='parallax' pages={3}>

            <Parallax.Layer
              offset={.025}
              speed={0}>
              <img src={Noise} className="noise" alt='Work' />
            </Parallax.Layer>

            <Parallax.Layer
              offset={.05}
              speed={.5}>
              <div className='work-header'>work.</div>
            </Parallax.Layer>

            <Project name="jot-it" >
              Hi I live in here.
            </Project>

            <Parallax.Layer
              offset={1.01}
              speed={.6}
              style={{ backgroundColor: '#008B95' }}>
              <Grid>
                <Row>
                  <Col start="xs" className="box2"/>
                  <Col end="x s" className="box">
                    <div>Hi I live in here</div>
                  </Col>
                </Row>
              </Grid>
            </Parallax.Layer>

            <Parallax.Layer
              offset={1.7}
              speed={.6}
              style={{ backgroundColor: '#3C7CBF' }}>
              <Grid>
                <Row>
                  <Col end="xs" className="box">
                    <div>Hi I live over there</div>
                  </Col>
                  <Col start="xs" className="box2"/>
                </Row>
              </Grid>
            </Parallax.Layer>

            <Parallax.Layer
              offset={2}
              speed={.4}
              style={{ backgroundColor: '#423972' }}>
              <Grid>
                <Row>
                  <Col start="xs" className="box2"/>
                  <Col end="x s" className="box">
                    <div>Hi I live in here</div>
                  </Col>
                </Row>
              </Grid>
            </Parallax.Layer>

            <Parallax.Layer
              offset={2.75}
              speed={.4}
              style={{ backgroundColor: 'orange' }}/>

          </Parallax>
        </div>
      </Content>
    );
  }
}
