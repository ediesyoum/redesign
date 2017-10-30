import React, { Component } from 'react';
import Project from '../components/Project';
import ProjectData from '../projects.json';

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    let id = this.props.match.params.id

    this.project = {
      id,
      ...ProjectData[id]
    };
  }

  render() {
    return(
      <Project {...this.project} />
    );
  }
}
