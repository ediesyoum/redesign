import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from '../components/Featured';
import MediaQuery from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';
import BracketGradient from '../assets/img/bracketgradient.svg';
import Animate from "animate.css/animate.min.css";

export default class Home extends Component {
  render() {
    return (
        <Parallax ref="parallax" pages={3} className={'wrapper scrollbar'}>
          <ScrollAnimation
            animateIn="bounceInUp"
            offset={30000}
            animateOut="bounceInUp"
            duration={'7s'}>

            <MediaQuery query="(min-device-width: 667px)">
              <Parallax.Layer
                offset={0}
                speed={1.5}>
                <img className={"triangle__bg"} src={BracketGradient} alt="Bracket Art"/>
              </Parallax.Layer>
              <Parallax.Layer
                offset={0}
                speed={1.5}
                className={'premise'}
                style={{ height: 300 }}>
                  <h1>
                    <p className="yo">
                      <span className="waving-hand">
                        <div className="animated wobble infinite">👋</div>
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
            </MediaQuery>


            <MediaQuery query="(max-device-width: 667px)">
              <Parallax.Layer
                offset={0}
                speed={1}
                style={{ height: 300 }}>
                <img className={"triangle__bg--sm"} src={BracketGradient} alt="Bracket Art"/>
              </Parallax.Layer>
              <Parallax.Layer
                offset={0}
                speed={1.5}
                className={'premise-sm'}>
                  <h1>
                    <p className="yo--sm">
                      <span className="waving-hand--sm">
                        <div className="animated wobble infinite">👋</div>
                      </span>
                        Hi there.
                      </p>
                        I'm
                      <span className="myname">Eden</span>
                        and I'm a
                      <div className="rotatewords-wrapper">
                        <div className="rotatewords-sm">
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
            </MediaQuery>
          </ScrollAnimation>
         <Featured/>
      </Parallax>
    );
  }
}
