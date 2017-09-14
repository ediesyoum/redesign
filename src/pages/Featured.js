import React, { Component } from 'react';
import Preview from '../components/Preview';
import Projects from '../projects.json';

export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    return (
      <Preview {...jotit} />
    )
  }
}
