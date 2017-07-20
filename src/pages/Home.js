import React, { Component } from 'react';
import Page from '../templates/Page';
import Wave from '../assets/img/wave.svg';

export default class Home extends Component {
  render() {
    return (
      <Page title="Home">

        <img className="wave" alt='Wave' src={Wave} />

        <div className="rectangle__teal"></div>

        <div className="rectangle__pink"></div>

        <div className="circle"></div>

        <div>
          <h3>web development + design</h3>
        </div>

      </Page>
    );
  }
}
