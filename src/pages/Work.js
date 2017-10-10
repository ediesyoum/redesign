import React, { Component } from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import CSM from '../assets/img/csm.png';

export default class Work extends Component {
  get projects() {
    let projectIDs = Object.keys(Projects);

    return projectIDs.map(function(id) {
      let projectAttributes = Projects[id];
      let boxClassName = `box box--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <div className={boxClassName}>
          <ProjectPreview index={indexInArray} {...projectAttributes} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="work-wrapper">
        <div className="work-header">
          <p>Featured Projects</p>
        </div>

        {this.projects}
      </div>
    );
  }
}
