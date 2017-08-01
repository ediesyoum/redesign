import React, { Component } from 'react';
import Content from '../components/Content';
import Parallax from 'react-springy-parallax';
import Noise from '../assets/img/noise.svg';

export default class Work extends Component {
  render() {
    return (
      <Content title="Work">

        <div>
          <Parallax ref='parallax' pages={3}>

            <Parallax.Layer
              offset={.17}
              speed={2}>

              <img src={Noise} alt='Work' />

            </Parallax.Layer>

          <Parallax.Layer
            offset={.10}
            speed={.25}>

            <div className='work-header'>work</div>

          </Parallax.Layer>

            <Parallax.Layer
              offset={.43}
              speed={.5}
              style={{ backgroundColor: 'blue' }} />

          </Parallax>
        </div>

      </Content>
    );
  }
}
