import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from './Featured';
import Blur from '../assets/img/javascript-blur.jpg';


export default class Home extends Component {
  render() {
    return (
        <Parallax ref="parallax" pages={1} className={'wrapper'}>

          <Parallax.Layer
            offset={0}
            speed={.9}
            className={'blurbg'}
            style={{
              backgroundImage: `url(${Blur})`,
              top: 0,
            }}/>

            <Parallax.Layer
              offset={0}
              speed={0.9}
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

                   <div className="premise_line03">
                     creating first class web experiences
                   </div>
                   <div className="premise_line04">
                     with functional, aesthetic design + code.
                   </div>

                 </div>
              </h1>
            </Parallax.Layer>


        <Featured/>

      </Parallax>
    );
  }
}
