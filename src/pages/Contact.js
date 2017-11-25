import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Parallax from 'react-springy-parallax';
import MediaQuery from 'react-responsive';

export default class Contact extends Component {
  render() {
    return (
        <div>
          <MediaQuery query="(max-device-width: 666px)">
            <Parallax ref="parallax" className={'page__wrapper'}>
              <section className="page__header">
                <h1 className="page__header--title">contact</h1>
              </section>
              <section>
                <form method="POST" className="contact-form" action="http://formspree.io/me@edencod.es">
                  <div>
                    <input type="name" name="name" className="contact-form__field" placeholder="Your name"></input>
                  </div>
                  <div>
                    <input type="email" name="email" className="contact-form__field" placeholder="Your email"></input>
                  </div>
                  <div>
                    <textarea name="message" className="contact-form__field contact-form__field--message" placeholder="Your message"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="contact-form__field contact-form__button">Send</button>
                  </div>
                </form>
              </section>
              <section className="footer">
                <Grid fluid>
                  <Row>
                    <Col xs="start">
                      <p>Built with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
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
            <Parallax ref="parallax" className={'page__wrapper'}>
              <section className="page__header">
                <h1 className="page__header--title">contact</h1>
              </section>
              <section>
                <form method="POST" className="contact-form" action="http://formspree.io/me@edencod.es">
                  <div>
                    <input type="name" name="name" className="contact-form__field" placeholder="Your name"></input>
                  </div>
                  <div>
                    <input type="email" name="email" className="contact-form__field" placeholder="Your email"></input>
                  </div>
                  <div>
                    <textarea name="message" className="contact-form__field contact-form__field--message" placeholder="Your message"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="contact-form__field contact-form__button">Send</button>
                  </div>
                </form>
              </section>
              <section className="footer">
                <Grid fluid>
                  <Row>
                    <Col xs="start">
                      <p>Built with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
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
