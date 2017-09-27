import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class UpennLabs extends Component {
  render() {
    let upenn = ProjectData['upenn'];
    return (

        <Project {...upenn} />

    );
  }
}
