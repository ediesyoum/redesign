import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class Current extends Component {
  render() {
    let current = ProjectData['portfolio-current'];
    return (

        <Project {...current} />

    );
  }
}
