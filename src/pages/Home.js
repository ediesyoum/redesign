import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from '../components/Featured';
import ScrollAnimation from 'react-animate-on-scroll';
import {emojify} from 'react-emojione';

const emojiStyles = {
  style: {
        height: 40,
        padding: 0
    }
}

export default class Home extends Component {
  render() {
    return (
        <Parallax ref="parallax" pages={1} className={'wrapper'}>

          <ScrollAnimation
            animateIn="wobble"
            offset={550}
            animateOut="wobble"
            duration={'1s'}>

            <Parallax.Layer
              offset={0}
              speed={0.9}
              className={'premise'}>

              <h1>

                <p className="greet">
                  <span className="waving-hand">
                    {emojify(':wave:', emojiStyles)}
                  </span>
                  Hi there.</p> I'm
                <span className="myname">Eden</span>
                  and I'm a
                  <div className="rotatewords-wrapper">
                    <div className="rotatewords">
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
                  </div>

                   <div className="premise_line03">
                     creating first class web experiences
                   </div>
                   <div className="premise_line04">
                     with functional, aesthetic design + code.
                   </div>

                 </div>
              </h1>
            </Parallax.Layer>
          </ScrollAnimation>

        <Featured/>

      </Parallax>

    );
  }
}
