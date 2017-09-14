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

            <div className="premise">

              <h1> edencod.es :</h1>

              <ReactRotatingText
                items={[' Front End Web Developer ',
                  ' Web Artisan ',
                  ' UI Enthusiast ',
                  ' Graphic Design ',
                  ' Creative Web Developer '
                ]}
                typingInterval={80}
                color={'62F9BB'}
                className={'rotatewords'}
                />

            </div>

            <div className="recent">
              <p>Test</p>
            </div>


            <Featured/>


        </Parallax>
    );
  }
}
