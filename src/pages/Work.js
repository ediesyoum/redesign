import React, { Component } from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import { Grid, Row, getColumnProps } from 'react-flexbox-grid';

export default class Work extends Component {
  get projects() {
    let projectIDs = Object.keys(Projects);
    let colProps = getColumnProps(this.props);

    return projectIDs.map(function(id) {
      let projectAttributes = Projects[id];
      let boxClassName = `box box--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <Grid>
          <Row>
            <div className={`${boxClassName} ${colProps.className}`}>
              <ProjectPreview index={indexInArray} {...projectAttributes} />
            </div>
          </Row>
        </Grid>
      );
    });
  }

  render() {
    return (
      <Parallax ref="parallax" pages={4} className={'wrapper'}>

          <div className="work-wrapper">
            <div className="work-header">
              <div className="work-header--text">featured projects</div>
            </div>

            {this.projects}

        </div>
      </Parallax>
    );
  }
}
