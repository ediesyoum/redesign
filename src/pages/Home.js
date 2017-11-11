import React, { Component } from 'react';
import {emojify} from 'react-emojione';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from '../components/Featured';
import ScrollAnimation from 'react-animate-on-scroll';



export default class Home extends Component {
  render() {
    return (
        <Parallax ref="parallax" pages={3} className={'wrapper scrollbar'}>

          <ScrollAnimation
            animateIn="bounceInUp"
            offset={30000}
            animateOut="bounceInUp"
            duration={'7s'}>
            <Parallax.Layer
              offset={0}
              speed={1}
              className={'premise'}
              style={{ height: 300 }}>
                <h1>
                  <p className="greet">
                    <span className="waving-hand">
                        {emojify(':wave:')}
                    </span>
                      Hi there.
                    </p>
                      I'm
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
                       with functional, aesthetic
                       <p>design + code.</p>
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
