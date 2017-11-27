import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Parallax from 'react-springy-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ContactCard from '../components/ContactCard';

export default class Contact extends Component {
  render() {
    return (
        <div>
            <Parallax ref="parallax" pages={-1} className={'page__wrapper'}>
              <section className="page__header">
                <h1 className="page__header--title">contact</h1>
              </section>
                <ScrollAnimation animateIn="bounceInUp" offset={30000} animateOut="bounceInUp" duration={1.1}>
              <section>
                <section className="contact-wrapper">
                  <ContactCard/>
                </section>
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
                    <Col start="xs">
                      <p>Built with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
                    </Col>
                    <Col end="xs">
                      <Parallax.Layer
                        style={{ height: 30 }}
                        onClick={() => this.refs.parallax.scrollTo(0)}>
                        <span id="back-to-top" className="going-up" role="img" aria-label="Top Of Page">☝️</span>
                      </Parallax.Layer>
                    </Col>
                  </Row>
                </Grid>
              </section>
            </ScrollAnimation>
          </Parallax>
      </div>
    );
  }
}
