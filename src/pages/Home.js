import React, { Component } from 'react';
import {emojify} from 'react-emojione';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from '../components/Featured';


const emojiStyles = {
  style: {
        height: 70,
        padding: 0
    }
}

export default class Home extends Component {
  render() {
    return (
        <Parallax ref="parallax" pages={3} className={'wrapper scrollbar'}>

            <Parallax.Layer
              offset={0}
              speed={0.9}
              className={'premise'}
              style={{ height: 300 }}>
                <h1>
                  <p className="greet">
                    <span className="waving-hand">
                      {emojify(':wave:', emojiStyles)}
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
         <Featured/>
      </Parallax>
    );
  }
}
