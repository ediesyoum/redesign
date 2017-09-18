import React, { Component } from 'react';
import Content from '../components/Content';
import Project from '../components/Project';
import Projects from '../projects.json';

export default class Work extends Component {
  render() {
    let projects = Object.keys(Projects).map(function(id) {
      let attributes = { id, ...Projects[id] };
      return <Project {...attributes} />
    });

    return (
      <Content title="Work">
        {projects}
      </Content>
    );
  }
}
