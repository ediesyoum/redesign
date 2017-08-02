import React, { Component } from 'react';
import Content from '../components/Content';
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
              speed={1}>
              <div className='work-header'>work</div>
            </Parallax.Layer>

            <Parallax.Layer
              offset={.2}
              speed={.5}
              style={{ backgroundColor: '#401E7C' }}>
              <Grid>
                <Row>
                  <Col start="xs" className="box2"/>
                  <Col end="xs" className="box">
                    <div>Hi I live in here</div>
                  </Col>
                </Row>
              </Grid>
            </Parallax.Layer>

            <Parallax.Layer
              offset={.85}
              speed={.95}
              style={{ backgroundColor: 'darkblue' }} />

            <Parallax.Layer
              offset={.96}
              speed={1}
              style={{ backgroundColor: '#008B95' }}>
              <Grid>
                <Row>
                  <Col end="xs" className="box">
                    <div>Hi I live in here</div>
                  </Col>
                  <Col start="xs" className="box2"/>
                </Row>
              </Grid>
            </Parallax.Layer>

            <Parallax.Layer
              offset={1.5}
              speed={.25}
              style={{ backgroundColor: '#3C7CBF' }} />

            <Parallax.Layer
              offset={1.7}
              speed={.65}
              style={{ backgroundColor: '#423972' }} />




          </Parallax>


        </div>

      </Content>
    );
  }
}
