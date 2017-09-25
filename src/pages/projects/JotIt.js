import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class JotIt extends Component {
  render() {
    let jotit = ProjectData['jot-it'];
    return (

        <Project {...jotit} />

    );
  }
}
