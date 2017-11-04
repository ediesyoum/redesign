import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import Tilt from 'react-tilt';


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
            <Row center="xs">
              <Col bottom="xs">

                <div>
                  <Tilt className="Tilt" options={{
                      reverse : true,
                      max : 5,
                      perspective: 2000,
                      axis : null,
                      speed : 700
                    }}  onMouseLeave={this.onMouseLeave}>
                    <div className="Tilt-inner">
                      <div className={`${boxClassName}`}/>
                    </div>
                  </Tilt>
                </div>

                <ProjectPreview index={indexInArray} {...projectAttributes} />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    });
  }

  render() {
    return (
      <Parallax ref="parallax" pages={6}>

          <div className="work__wrapper">
            <div className="work__header">
              <div className="work__header--title">Featured Projects</div>
            </div>


            {this.projects}


        </div>
      </Parallax>
    );
  }
}
