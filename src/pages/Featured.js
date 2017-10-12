import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';

export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let csm = Projects['csm'];
    return (
      <div>

        <Parallax ref="parallax" pages={3}>

          <Parallax.Layer
            offset={.4}
            speed={0.5}
            className={'feature01-desktop'}
            style={{ height: 300 }}>
            <Preview {...csm} />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1.5}
            speed={0.5}
            className={'feature02-desktop'}
            style={{ height: 300 }}>
            <Preview {...csm} />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            className={'feature03-desktop'}
            style={{ height: 300 }}>
            <Preview {...csm} />
          </Parallax.Layer>

        </Parallax>

      </div>
    );
  }
}
