import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class Csm extends Component {
  render() {
    let csm = ProjectData['csm'];
    return (

        <Project {...csm} />

    );
  }
}
