import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class EastEnd extends Component {
  render() {
    let eastend = ProjectData['east-end'];
    return (

        <Project {...eastend} />

    );
  }
}
