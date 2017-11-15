import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';

export default class Contact extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={1} className={'wrapper'}>
        <main>

          <form method="POST" action="http://formspree.io/me@edencod.es">
            <Grid>
              <Col xs={12}>
                <Row center="xs">
                  <Col end="xs">
                    <input type="name" name="name" placeholder="Your name"></input>
                  </Col>

                  <Col end="xs">
                    <input type="email" name="email"
                  className="form-email" placeholder="Your email"></input>
                  </Col>
                </Row>
              </Col>


              <Col xs={12}>
                <Row center="xs">
                  <textarea name="message" className="form-message" placeholder="Your message"></textarea>
                </Row>
              </Col>


              <Col xs={12}>
                <Row center="xs">
                  <button type="submit" className="send-btn">Send</button>
                </Row>
              </Col>
            </Grid>
          </form>
        </main>

        <Footer />
      </Parallax>
    );
  }
}
