import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';
import CSM from '../../assets/img/csm.png';

export default class Csm extends Component {
  render() {
    let csm = ProjectData['csm'];
    return (
      <div>
        <img src={CSM}/>

        <Project {...csm} />

      </div>
    );
  }
}
