import React, { Component } from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import CSM from '../assets/img/csm.png';

export default class Work extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let csm = Projects['csm'];
    let current = Projects['portfolio-current']
    let economy = Projects['economy'];
    let eastend = Projects['east-end'];
    let tictactoe = Projects['tic-tac-toe'];
    let old = Projects['portfolio-old'];
    let upenn = Projects['upenn'];
    return (
      <div className="work-wrapper">

        <div className="work-header">
          <p>Featured Projects</p>
        </div>

        <div className="box">
          <img src={CSM} alt={"CSM"} className="project-img"/><ProjectPreview {...jotit} />
        </div>

        <div className="box">
          <ProjectPreview {...csm} />
        </div>

        <div className="box">
          <ProjectPreview {...current} />
        </div>

        <div className="box">
          <ProjectPreview {...economy} />
        </div>

        <div className="box">
          <ProjectPreview {...eastend} />
        </div>

        <div className="box">
          <ProjectPreview {...tictactoe} />
        </div>

        <div className="box">
          <ProjectPreview {...old} />
        </div>

        <div className="box">
          <ProjectPreview {...upenn} />
        </div>

      </div>

    );
  }
}
