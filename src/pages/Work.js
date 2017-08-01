import React, { Component } from 'react';
import Content from '../components/Content';
import Parallax from 'react-springy-parallax';

export default class Work extends Component {
  render() {
    return (
      <Content title="Work">

        <div>
          <Parallax ref='parallax' pages={3}>

            <Parallax.Layer
              offset={.5}
              speed={0.5}
              style={{ backgroundColor: 'rgb(64,30,124)' }}>

              <div>Work</div>

            </Parallax.Layer>

            <Parallax.Layer
              offset={1}
              speed={.5}
              style={{ backgroundColor: 'blue' }} />

          </Parallax>
        </div>

      </Content>
    );
  }
}
