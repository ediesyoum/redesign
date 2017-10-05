import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from './Featured';
import MediaQuery from '../components/MediaQuery';
import Blur from '../assets/img/javascript-blur.jpg';
import JotIt from '../assets/img/jot-it.png';

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
            }}/>

          <MediaQuery size="desktop">
            <Parallax.Layer
              offset={0}
              speed={0.5}
              className={'premise'}
              style={{
                height: 200
              }}>
              <h1>Hello! I'm Eden and I'm a</h1>

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
            </Parallax.Layer>

            <section className="featured">

              <div className="recent-desktop">
                <p>Test</p>
              </div>

              <div className="feature01-desktop">
                <img src={JotIt} className={'featuredImg'} alt="Jot It Preview"/>
              </div>

              <div className="feature02-desktop">
                <p>Test</p>
              </div>

              <div className="feature03-desktop">
                <p>Test</p>
              </div>
            </section>
          </MediaQuery>

          <MediaQuery size="mobile">
            <div className="premise-sm">
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

            <div className="recent-mobile">
              <p>Test</p>
            </div>

            <div className="feature01-mobile">
              <p>Test</p>
            </div>

            <div className="feature02-mobile">
              <p>Test</p>
            </div>

            <div className="feature03-mobile">
              <p>Test</p>
            </div>
          </MediaQuery>

          <Featured/>
      </Parallax>
    );
  }
}
