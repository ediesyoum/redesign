import React, { Component } from 'react';
import Preview from '../components/Preview';
import Projects from '../projects.json';

export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    return (
      <div className="jotitpreview">
        <Preview {...jotit} />
      </div>
    );
  }
}
