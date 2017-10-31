import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';

export default class Work extends Component {
  get projects() {
    let projectIDs = Object.keys(Projects);

    return projectIDs.map(function(id) {
      let projectAttributes = Projects[id];
      let boxClassName = `projectcard projectcard--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <div>
          <Grid fluid>
            <Row bottom="xs">
              <Col xs={6}>
                <div className={`${boxClassName}`}/>
              </Col>

              <Col xs={6}>
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
      <Parallax ref="parallax" pages={4} className={'wrapper'}>

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
