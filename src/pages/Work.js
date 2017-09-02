import React, { Component } from 'react';
import Content from '../components/Content';
import Project from '../components/Project';
import Projects from '../projects.json';

export default class Work extends Component {
  get projects() {
    return Object.values(Projects).map(function(projectAttributes) {
      return <Project {...projectAttributes} />
    });
  }

  render() {
    return (
      <Content title="Work">
        {this.projects}
      </Content>
    );
  }
}
