import React, { Component } from 'react';
import Content from '../components/Content';
import Shapes from '../assets/img/shapes.svg';
import ShapesMobile from '../assets/img/shapes-mobile.svg';
import { Grid, Row } from 'react-flexbox-grid';
import MediaQuery from '../components/MediaQuery';
import ReactRotatingText from 'react-rotating-text';

export default class Home extends Component {
  render() {
    return (
        <Content>
          <MediaQuery size="desktop">
            <div>
              <img src={Shapes} className="shapes" alt="design & development" />
            </div>
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
          </MediaQuery>

          <MediaQuery size="mobile">
            <Grid>
              <Row>
                <img src={ShapesMobile} className="shapes-sm" alt="design & development" />
              </Row>

              <Row center="xs" className="premise-sm">
                <div className="mobile-h1"> edencod.es :</div>

                <ReactRotatingText
                  items={[' Front End Web Developer ',
                    ' Web Artisan ',
                    ' UI Enthusiast ',
                    ' Graphic Design ',
                    ' Creative Web Developer '
                  ]}
                  typingInterval={80}
                  color={'62F9BB'}
                  className={'rotatewords-sm'}
                  />
              </Row>

            </Grid>
          </MediaQuery>

        </Content>
    );
  }
}
