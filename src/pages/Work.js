import React, { Component } from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Parallax from 'react-springy-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

import Tilt from 'react-tilt';

export default class Work extends Component {
  onMouseLeave(e) {
    //console.log('clientY:', e.nativeEvent.clientY);
  }
  get projects() {
    let projectIDs = Object.keys(Projects);

    return projectIDs.map((id) => {
      let projectAttributes = Projects[id];
      let boxClassName = `projectcard projectcard--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <Tilt
          className="Tilt"
          options={{
            max : 25,
            height: 300,
            width: 300,
            perspective: 2000,
            speed : 500,
            easing: "cubic-bezier(.03,.98,.52,.99)"
          }}
          onMouseLeave={this.onMouseLeave}>
            <div className="Tilt-inner">
              <ProjectPreview {...projectAttributes} index={indexInArray} className={boxClassName} />
            </div>
        </Tilt>
      );
    });
  }

  render() {
    return (
        <div>
          <Parallax ref="parallax" pages={-1} className={'page__wrapper'} speed={.5}>
            <div className="page__header">
              <h1 className="page__header--title">
                Featured Projects
              </h1>
            </div>
            <ScrollAnimation
              animateIn="bounceInUp"
              offset={30000}
              animateOut="bounceInUp"
              duration={1.1}>
              <div className="flex-wrapper">
                {this.projects}
              </div>
            </ScrollAnimation>
            <footer className="footer">
              <Grid fluid>
                <Row>
                  <Col start="xs">
                    <p>Built with <span className="hearts" role="img" aria-label="Love">❤️</span> by Eden Syoum</p>
                  </Col>
                  <Col end="xs">
                    <Parallax.Layer
                      style={{ height: 30 }}
                      onClick={() => this.refs.parallax.scrollTo(0)}>
                        <span id="back-to-top" className="going-up" role="img" aria-label="Top Of Page">☝️</span>
                    </Parallax.Layer>
                  </Col>
                </Row>
              </Grid>
            </footer>
          </Parallax>
        </div>
    );
  }
}
