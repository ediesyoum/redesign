import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from './Featured';
import MediaQuery from '../components/MediaQuery';
import Blur from '../assets/img/javascript-blur.jpg';
import JotIt from '../assets/img/jot-it.png';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';

export default class Home extends Component {
  render() {
    return (
        <Parallax ref="parallax" pages={3}>

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
                width: 200,
                height: 300
              }}>

              <h1>Hi there I'm
                <span className="myname">Eden</span>
                  <div className="rotatewords-wrapper">
                    and I'm a

                    <span className="rotatewords">
                      <ReactRotatingText
                      items={['Front End Web Developer',
                        'UI Designer',
                        'UX-Focused Developer',
                        'Graphic Designer',
                        'Creative Web Developer'
                      ]}
                      typingInterval={90}
                      color={'62F9BB'}
                      />
                   </span>

                   <div className="premise_line03">creating first class web experiences</div>
                     <div className="premise_line04">with functional, aesthetic design + code.</div>
                 </div>
               </h1>
              </Parallax.Layer>

              <section className="featured">
                <Parallax.Layer
                  offset={0}
                  speed={0.5}
                  className={'recent-desktop'}
                  style={{ height: 300 }}>
                  <p>Featured Projects</p>

                    <Parallax.Layer
                      onClick={() => this.refs.parallax.scrollTo(.4)}>
                      <FaChevronDown/>
                    </Parallax.Layer>
                </Parallax.Layer>
                <Featured/>
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

            <Featured/>
          </MediaQuery>

      </Parallax>
    );
  }
}
