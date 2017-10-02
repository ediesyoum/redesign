import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from './Featured';
import MediaQuery from '../components/MediaQuery'
import Blur from '../assets/img/javascript-blur.jpg';

export default class Home extends Component {
  render() {
    return (
      <Parallax
        ref={ref => this.parallax = ref}
        pages={3}>


          <Parallax.Layer
            offset={0}
            speed={0.5}
            className={'blurbg'}
            style={{
              backgroundImage: `url(${Blur})`,
              top: 0
            }}>
              <p>Hai</p>
            </Parallax.Layer>

          <MediaQuery size="desktop">
            <div className="premise">
              <h1>Hello! I'm Eden and I'm a</h1>
            </div>
          </MediaQuery>

          <MediaQuery size="mobile">
            <div className="premise-sm">
              <h1>Hello! I'm Eden and I'm a</h1>
            </div>
          </MediaQuery>

          <div className="roles">
            <ReactRotatingText
              items={['Front End Web Developer',
                'UI Designer',
                'UX-Focused Developer',
                'Graphic Designer',
                'Creative Web Developer'
              ]}
              typingInterval={150}
              color={'62F9BB'}
              className={'rotatewords'}
              />
          </div>

          <div className="recent">
            <p>Test</p>
          </div>

          <div className="feature01">
            <p>Test</p>
          </div>

          <Featured/>
      </Parallax>
    );
  }
}
