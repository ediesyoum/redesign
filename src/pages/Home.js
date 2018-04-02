import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import ContactCard from '../components/ContactCard';
import ScrollAnimation from 'react-animate-on-scroll';
import BracketGradient from '../assets/img/bracketgradient.svg';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let eastend = Projects['east-end'];
    let upenn = Projects['upenn'];
    return (
        <div>
          <Parallax ref="parallax" pages={-1} className={'page__wrapper'}>
            <ScrollAnimation animateIn="bounceInUp" offset={30000} animateOut="bounceInUp" duration={1}>
              <Parallax.Layer offset={0} style={{height: 200}} speed={1.5}>
                <img className={"triangle__bg"} src={BracketGradient} alt="Bracket Art"/>
              </Parallax.Layer>
              <Parallax.Layer offset={0} speed={1.5} className={'premise'}>
                <h1>
                  <div className="yo">
                    <span className="waving-hand">
                      <div className="animated wobble infinite">
                        <span role="img" aria-label="Waving Hand">👋</span>
                      </div>
                    </span>
                    Hi there.
                  </div>
                  <div className="whois">I'm
                  <span className="myname">Eden</span>
                    and I'm a</div>
                  <div className="rotatewords-wrapper">
                    <div className="rotatewords">
                      <ReactRotatingText
                        items={['Front End Web Developer',
                          'UI Designer',
                          'UX-Focused Developer',
                          'Graphic Designer',
                          'Creative Web Developer']}
                        typingInterval={90}
                        color={'62F9BB'}/>
                     </div>
                     <div className="premise_line03">
                       creating first class web experiences
                     </div>
                     <div className="premise_line04">
                       with functional, aesthetic <p>design + code.</p>
                     </div>
                 </div>
              </h1>
            </Parallax.Layer>

            <section className="featured">
              <div className={'featured-projects'}>
                <p>see featured projects</p>
                <Parallax.Layer style={{height: 200}} onClick={() => this.refs.parallax.scrollTo(.98)}>
                  <FaChevronCircleDown className="chevron-down"/>
                </Parallax.Layer>
              </div>

              <section className="featured01">
                <Preview {...jotit} id="jot-it">
                  <div className={"see-more--wrapper"}>
                    <Link to="/work/jot-it">View Project</Link>
                  </div>
                </Preview>
              </section>

              <section className="featured02">
                <Preview {...eastend} id="east-end" />
              </section>

              <section className="featured03">
                <Preview {...upenn} id="upenn"/>
              </section>

              <section className="see-more__wrapper">
                <Link to="/work">more projects</Link>
              </section>

              <section className="contact-card__wrapper">
                <ContactCard/>
              </section>
            </section>
            <footer className="footer">
              <Grid fluid>
                <Row>
                  <Col xs="start">
                    <p>Built with <span className="hearts" role="img" aria-label="Love">❤️</span> by Eden Syoum</p>
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
            </footer>
          </ScrollAnimation>
        </Parallax>
      </div>
    );
  }
}
