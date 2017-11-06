import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import Tilt from 'react-tilt';
import Footer from '../components/Footer';

export default class Work extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  get projects() {
    let projectIDs = Object.keys(Projects);

    return projectIDs.map((id) => {
      let projectAttributes = Projects[id];
      let boxClassName = `projectcard projectcard--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <div>
          <Grid fluid>
            <Col xs={12}>
              <Row center="xs">
                <Row center="xs">
                  <Tilt className="Tilt" options={{
                      max : 15,
                      perspective: 2000,
                      scale: 1.1,
                      reset: true,
                      speed : 100
                    }}  onMouseLeave={this.onMouseLeave}>
                      <div className="Tilt-inner">
                        <div className={`${boxClassName}`}/>
                      </div>
                    </Tilt>
                  </Row>

                  <Row center="xs">
                    <Row bottom="xs">
                      <ProjectPreview index={indexInArray} {...projectAttributes} />
                    </Row>
                  </Row>
                </Row>
              </Col>
          </Grid>
        </div>
      );
    });
  }

  render() {
    return (
      <Parallax ref="parallax" pages={5.5} speed={.5}>

        <div className="work__wrapper">
          <div className="work__header">
            <div className="work__header--title">Featured Projects</div>
          </div>

            {this.projects}

          </div>
        <Footer/>
      </Parallax>

    );
  }
}
