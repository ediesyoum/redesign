import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import MediaQuery from '../components/MediaQuery';
import Featured from './Featured';
import Blur from '../assets/img/javascript-blur.jpg';

export default class Home extends Component {
  render() {
    return (
      <Parallax
        ref={ref => this.parallax = ref}
        pages={3}>

        <MediaQuery size="desktop">

          <Parallax.Layer

            offset={0}
            speed={0.5}
            style={{
              backgroundImage: Blur
            }}>
              <p>Hai</p>
            </Parallax.Layer>

          <div className="premise">

            <h1>Hello! I'm Eden and I'm a</h1>

          </div>

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

          <Featured/>
        </MediaQuery>

        <MediaQuery size="mobile">
          <div>
            <div className="premise-sm">

              <h1>Hello! I'm Eden, and I'm a</h1>

            </div>

            <div className="roles-sm">
              <ReactRotatingText
                items={['Front End Web Developer',
                  'UI Designer',
                  'UX-Focused Developer',
                  'Graphic Designer',
                  'Creative Web Developer'
                ]}
                typingInterval={150}
                color={'62F9BB'}
                className={'rotatewords-sm'}
                />
            </div>

            </div>

            <div className="recent">
              <p>Test</p>
            </div>


          <Featured/>
        </MediaQuery>

      </Parallax>
    );
  }
}
