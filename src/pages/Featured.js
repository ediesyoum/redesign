import React, { Component } from 'react';
import Preview from '../components/Preview';
import Projects from '../projects.json';

export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let csm = Projects['csm'];
    return (
      <div>
        <div className="jotitpreview">
          <Preview {...jotit} />
        </div>

        <div className="jotitpreview">
          <Preview {...csm} />
        </div>
      </div>
    );
  }
}
