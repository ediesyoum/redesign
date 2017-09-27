import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class Economy extends Component {
  render() {
    let economy = ProjectData['economy'];
    return (

        <Project {...economy} />

    );
  }
}
