import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import Eyes from '../assets/img/eyes.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Col, Row } from 'react-flexbox-grid';
import 'animate.css/animate.min.css';

export default class About extends Component {
  seeBackground(event) {
    let background = document.getElementById('background');
    background.classList.add('bounceInUp');
    background.style.display = 'block';
    return false;
  }

  render() {
    return (
          <div>
            <MediaQuery query="(max-device-width: 666px)">
              <Parallax ref="parallax" className={'page__wrapper'}>
                <section className="page__header">
                  <h1 className="page__header--title--sm">About</h1>
                </section>
                  <ScrollAnimation animateIn="bounceInUp" offset={30000} animateOut="bounceInUp" duration={'7s'}>
                  <img src={Eyes} className="about__img--sm" alt="Eden Syoum"/>
                <main className="about__content__wrapper--sm">
                  <section className="about__content--sm">
                    <h3 className="about__header--title">A User-Focused Developer</h3>

                    <p>Throughout my technical career, I have worked hard to be a user advocate.  As an IT consultant turned web developer, I have spent several years studying user habits, seeing their pain points first hand, working tirelessly to resolve and prevent future obstacles. This is why designing with consideration and empathy for the user’s experience comes naturally to me - it empowers me to create visually engaging, functional and aesthetic products that humans will truly love to use, and use often.</p>

                    <a href="#" onClick={this.seeBackground}>See Background</a>

                    <div id="background" className="about__background">
                      <h3>Background</h3>

                      <p>Creating graphics and simple HTML and CSS snippets became a hobby for me around the age of 12. It was at this time that web design became the center of my world - I would go on to build websites and blogs, host domains and design beautiful user interfaces, brands, logos and complex graphics of all kinds. I did web design for six years until I went to college, where I studied political and social sciences. Following graduation, I sought out technical work where I could design, code AND help everyday people to better use tech to their advantage, and I eventually found this in doing web design and working as an IT consultant at the University of Pennsylvania.</p>

                      <p>Flash forward to 2014, and major advances in JavaScript and mobile development and design have completely revamped the state of the web. For the past three years, I have worked to gain experience with a variety of <Link to="/work">projects</Link>, delving deeper into my lifelong love of code and well-implemented UI/UX design. As of recent, I have become very interested in ReactJS for its ease of usability via components, and how powerful and portable it is as an front end tool for interactive UX design. <Link to="/work/portfolio-current">See my case study on my first ReactJS project.</Link></p>
                    </div>
                  </section>
                </main>
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
                          <span id="back-to-top" className="going-up--sm" role="img" aria-label="Top Of Page">☝️</span>
                        </Parallax.Layer>
                      </Col>
                    </Row>
                  </Grid>
                </section>
              </ScrollAnimation>
              </Parallax>
            </MediaQuery>

            <MediaQuery query="(min-device-width: 667px)">
              <Parallax ref="parallax" className={'page__wrapper'} speed={.5}>
                <section className="page__header">
                  <h1 className="page__header--title">About</h1>
                </section>
                <ScrollAnimation animateIn="bounceInUp" offset={30000} animateOut="bounceInUp" duration={'7s'}>
                <img src={Eyes}  className="about__img" alt="Eden Syoum" />
                <main className="about__content__wrapper">
                  <section className="about__content">
                    <h3>A User-Focused Developer</h3>

                    <p>Throughout my technical career, I have worked hard to be a user advocate.  As an IT consultant turned web developer, I have spent several years studying user habits, seeing their pain points first hand, working tirelessly to resolve and prevent future obstacles. This is why designing with consideration and empathy for the user’s experience comes naturally to me - it empowers me to create visually engaging, functional and aesthetic products that humans will truly love to use, and use often.</p>

                    <a href="#" onClick={this.seeBackground}>See Background</a>

                    <div id="background" className="about__background animated">
                      <h3>Background</h3>

                      <p>Creating graphics and simple HTML and CSS snippets became a hobby for me around the age of 12. It was at this time that web design became the center of my world - I would go on to build websites and blogs, host domains and design beautiful user interfaces, brands, logos and complex graphics of all kinds. I did web design for six years until I went to college, where I studied political and social sciences. Following graduation, I sought out technical work where I could design, code AND help everyday people to better use tech to their advantage, and I eventually found this in doing web design and working as an IT consultant at the University of Pennsylvania.</p>

                      <p>Flash forward to 2014, and major advances in JavaScript and mobile development and design have completely revamped the state of the web. For the past three years, I have worked to gain experience with a variety of <Link to="/work">projects</Link>, delving deeper into my lifelong love of code and well-implemented UI/UX design. As of recent, I have become very interested in ReactJS for its ease of usability via components, and how powerful and portable it is as an front end tool for interactive UX design. <Link to="/work/portfolio-current">See my case study on my first ReactJS project.</Link></p>
                    </div>
                  </section>
                </main>
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
              </ScrollAnimation>
              </Parallax>
            </MediaQuery>
          </div>
    );
  }
}
