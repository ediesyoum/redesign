import React, { Component } from 'react';
import Content from '../components/Content';
import Parallax from 'react-springy-parallax';
import Noise from '../assets/img/noise.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ImageZoom from 'react-medium-image-zoom';

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

            <Parallax.Layer
              offset={.2}
              speed={.7}
              style={{ backgroundColor: '#401E7C' }}>
              <Grid>
                <Row>
                  <Col start="xs">


                      <ImageZoom
                        image={{
                          src: '/projects/02-jot-it.png',
                          alt: 'Jot It App',
                          className: 'portfolio-img-01',
                          style: { width: '50vh' }
                        }}
                        zoomImage={{
                          src: '/projects/02-jot-it.png',
                          alt: 'Jot It',
                          style: { background: '#000000' }
                        }}
                      />


                  </Col>
                  <Col end="xs" className="box">
                    <div>Hi I live in here</div>
                  </Col>
                </Row>
              </Grid>
            </Parallax.Layer>

            <Parallax.Layer
              offset={.87}
              speed={.7}
              style={{ backgroundColor: 'blue' }}>
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
