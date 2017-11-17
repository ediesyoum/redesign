import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(max-device-width: 666px)">
          <Parallax ref="parallax" pages={1} className={'wrapper'}>
            <section className="contact__header">
              <h1 className="contact__header--title">contact</h1>
            </section>
            <main className="about__content__wrapper">
              <section className="about__content">
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
              </section>
            </main>
            <section className="footer">
              <Grid fluid>
                <Row>
                  <Col xs="start">
                    <p>Made with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
                  </Col>
                  <Col xs="end">
                    <Parallax.Layer
                      style={{ height: 30 }}
                      onClick={() => this.refs.parallax.scrollTo(0)}>
                      <span id="back-to-top" className="going-up" role="img" aria-label="Top Of Page">☝️</span>
                    </Parallax.Layer>
                  </Col>
                </Row>
              </Grid>
            </section>
        </Parallax>
        </MediaQuery>

        <MediaQuery query="(min-device-width: 667px)">
          <Parallax ref="parallax" pages={2} className={'wrapper'}>
            <section className="contact__header">
              <h1 className="contact__header--title">contact</h1>
            </section>
            <main className="about__content__wrapper">
              <section className="about__content">
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
              </section>
            </main>
            <section className="footer">
              <Grid fluid>
                <Row>
                  <Col xs="start">
                    <p>Made with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
                  </Col>
                  <Col xs="end">
                    <Parallax.Layer
                      style={{ height: 30 }}
                      onClick={() => this.refs.parallax.scrollTo(0)}>
                      <span id="back-to-top" className="going-up" role="img" aria-label="Top Of Page">☝️</span>
                    </Parallax.Layer>
                  </Col>
                </Row>
              </Grid>
            </section>
        </Parallax>
        </MediaQuery>
      </div>
    );
  }
}
