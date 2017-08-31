import React, { Component } from 'react';
import Content from '../components/Content';
import ReactRotatingText from 'react-rotating-text';

export default class Home extends Component {
  render() {
    return (
        <Content>

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
            
        </Content>
    );
  }
}
