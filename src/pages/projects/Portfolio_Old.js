import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class Old extends Component {
  render() {
    let old = ProjectData['portfolio-old'];
    return (

        <Project {...old} />

    );
  }
}
