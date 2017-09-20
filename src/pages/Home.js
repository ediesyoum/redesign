import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Featured from './Featured';

export default class Home extends Component {
  render() {
    return (
      <Parallax
        ref={ref => this.parallax = ref}
        pages={3}>

          <div>
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

            </div>

            <div className="recent">
              <p>Test</p>
            </div>


            <Featured/>


        </Parallax>
    );
  }
}
