import React, { Component } from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';

export default class Work extends Component {
  get projects() {
    let projectIDs = Object.keys(Projects);

    return projectIDs.map(function(id) {
      let projectAttributes = Projects[id];
      let boxClassName = `box box--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <div className={`${boxClassName}`}>
          <ProjectPreview index={indexInArray} {...projectAttributes} />
        </div>
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
