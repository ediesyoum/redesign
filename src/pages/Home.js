import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';
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
        <MediaQuery query="(min-device-width: 667px)">
          <Parallax ref="parallax" pages={2.361} className={'wrapper scrollbar'}>
            <ScrollAnimation
              animateIn="bounceInUp"
              offset={30000}
              animateOut="bounceInUp"
              duration={'7s'}>
              <Parallax.Layer
                offset={0}
                speed={1.5}>
                <img className={"triangle__bg"} src={BracketGradient} alt="Bracket Art"/>
              </Parallax.Layer>
              <Parallax.Layer
                offset={0}
                speed={1.5}
                className={'premise'}
                style={{ height: 300 }}>
                  <h1>
                    <p className="yo">
                      <span className="waving-hand">
                        <div className="animated wobble infinite">
                          <span role="img" aria-label="Waving Hand">👋</span>
                        </div>
                      </span>
                        Hi there.
                      </p>
                        I'm
                      <span className="myname">Eden</span>
                        and I'm a
                      <div className="rotatewords-wrapper">
                        <div className="rotatewords">
                          <ReactRotatingText
                            items={['Front End Web Developer',
                              'UI Designer',
                              'UX-Focused Developer',
                              'Graphic Designer',
                              'Creative Web Developer'
                            ]}
                            typingInterval={90}
                            color={'62F9BB'}
                            />
                        </div>

                       <div className="premise_line03">
                         creating first class web experiences
                       </div>
                       <div className="premise_line04">
                         with functional, aesthetic
                         <p>design + code.</p>
                       </div>
                     </div>
                </h1>
              </Parallax.Layer>


              <section className="featured">
                <Parallax.Layer
                  offset={0}
                  speed={.5}
                  className={'featured-projects'}>
                  <p>Featured Projects</p>
                  <Parallax.Layer
                    onClick={() => this.refs.parallax.scrollTo(.64)}>
                    <FaChevronCircleDown className="chevron-down"/>
                  </Parallax.Layer>
                </Parallax.Layer>
              </section>


                <Parallax.Layer offset={0.62} speed={.5} className="featured01">
                  <Preview {...jotit} id="jot-it" />
                </Parallax.Layer>

                <Parallax.Layer offset={0.899} speed={0.5} className="featured02">
                  <Preview {...eastend} id="east-end" />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={0.5} className="featured03">
                  <Preview {...upenn} id="upenn"/>
                </Parallax.Layer>

                <Parallax.Layer
                  offset={1.3}
                  speed={0.5}
                  className={"see-more--wrapper"}>
                  <Link to="/work">more projects</Link>
                </Parallax.Layer>

                <Parallax.Layer
                  offset={1.45}
                  speed={0.5}>
                  <ContactCard/>
                </Parallax.Layer>

                <Parallax.Layer
                  offset={1.65}
                  speed={0.5}
                  style={{ height: 80 }}
                  className={"footer"}>
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
                  </Parallax.Layer>
                </ScrollAnimation>
             </Parallax>
          </MediaQuery>

          <MediaQuery query="(max-device-width: 666px)">
            <Parallax ref="parallax" pages={5} className={'wrapper scrollbar'}>
              <ScrollAnimation
                animateIn="bounceInUp"
                offset={30000}
                animateOut="bounceInUp"
                duration={'7s'}>
              <Parallax.Layer
                offset={0}
                speed={1}
                style={{ height: 300 }}>
                <img className={"triangle__bg--sm"} src={BracketGradient} alt="Bracket Art"/>
              </Parallax.Layer>
              <Parallax.Layer
                offset={0}
                speed={1.5}
                className={'premise-sm'}>
                  <h1>
                    <p className="yo--sm">
                      <span className="waving-hand--sm">
                        <div className="animated wobble infinite">
                          <span role="img" aria-label="Waving Hand">👋</span>
                        </div>
                      </span>
                        Hi there.
                      </p>
                        I'm
                      <span className="myname">Eden</span>
                        and I'm a
                      <div className="rotatewords-wrapper">
                        <div className="rotatewords-sm">
                          <ReactRotatingText
                            items={['Front End Web Developer',
                              'UI Designer',
                              'UX-Focused Developer',
                              'Graphic Designer',
                              'Creative Web Developer'
                            ]}
                            typingInterval={90}
                            color={'62F9BB'}
                            />
                        </div>

                       <div className="premise_line03">
                         creating first class web experiences
                       </div>
                       <div className="premise_line04">
                         with functional, aesthetic
                         <p>design + code.</p>
                       </div>
                     </div>
                </h1>
              </Parallax.Layer>

            <div className="featured-preview-wrapper--sm">
              <section className="featured">
                <Parallax.Layer
                  offset={.019}
                  speed={.5}
                  className={'featured-projects'}>
                  <p>Featured Projects</p>
                  <Parallax.Layer
                    onClick={() => this.refs.parallax.scrollTo(0.211)}>
                    <FaChevronCircleDown className="chevron-down"/>
                  </Parallax.Layer>
                </Parallax.Layer>
              </section>

              <Parallax.Layer
                offset={.88}
                speed={0.5}
                className={'featured01--sm'}>
                <Preview {...jotit} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={0.894}
                speed={0.5}
                className={'featured02--sm'}>
                <Preview {...eastend} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={.488}
                speed={0.5}
                className={'featured03--sm'}>
                <Preview {...upenn} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={.59}
                speed={0.5}
                className={"see-more--wrapper"}>
                <Link to="/work">more projects</Link>
              </Parallax.Layer>

              <Parallax.Layer
                offset={.63}
                speed={0.5}
                style={{ height: 30 }}
                onClick={() => this.refs.parallax.scrollTo(0) }>
                >
                <ContactCard/>
                <Footer />
              </Parallax.Layer>
            </div>

            </ScrollAnimation>
          </Parallax>
        </MediaQuery>
      </div>
    );
  }
}
