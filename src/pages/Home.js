import React, { Component } from 'react';
import Content from '../components/Content';
import Shapes from '../assets/img/shapes.svg';
import ShapesMobile from '../assets/img/shapes-mobile.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MediaQuery from '../components/MediaQuery';
import ReactRotatingText from 'react-rotating-text';

export default class Home extends Component {
  render() {
    return (
      <Content title="Home">

        <MediaQuery size="desktop">
          <Grid>
            <Row>
              <Col xs={12}>

                <Row bottom="xs">

                  <Col xs>
                    <img src={Shapes} className="shapes" alt="design & development" />
                  </Col>

                  <Col xs className="premise">
                    <h1>edencod . es : </h1>

                    <ReactRotatingText
                      items={[' Front End Web Developer ',
                        ' Web Artisan ',
                        ' User Interface Designer ',
                        ' Graphic Design Hobbyist ',
                        ' Creative Web Developer '
                      ]}
                      typingInterval={80}
                      color={'62F9BB'}
                      className={'rotatewords'}
                      />

                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </MediaQuery>

        <MediaQuery size="mobile">
          <Grid>
            <Row>
              <img src={ShapesMobile} className="shapes-sm" alt="design & development" />
            </Row>

            <Row center="xs" className="premise-sm">
              <h1>edencod . es : </h1>

              <ReactRotatingText
                items={[' Front End Web Developer ',
                  ' Web Artisan ',
                  ' User Interface Designer ',
                  ' Graphic Designer ',
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
