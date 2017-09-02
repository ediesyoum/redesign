import React, { Component } from 'react';
import Content from '../components/Content';
import Project from '../components/Project';
import Projects from '../projects.json';

export default class Work extends Component {
  get projects() {
    return Object.keys(Projects).map(function(id) {
      let attributes = { id, ...Projects[id] };
      return <Project {...attributes} />
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
