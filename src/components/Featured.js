import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let eastend = Projects['east-end'];
    let upenn = Projects['upenn'];

    return (
        <Parallax ref="parallax"
          pages={1.448}
          speed={.5}
          className={'featured-wrapper scrollbar'}>
            <MediaQuery
              query="(min-device-width: 667px)" className="featured-preview-wrapper">
              <section className="featured">
                <Parallax.Layer
                  offset={0}
                  speed={.5}
                  className={'featured-projects'}>
                  <p>Featured Projects</p>
                  <Parallax.Layer
                    onClick={() => this.refs.parallax.scrollTo(0.211)}>
                    <FaChevronCircleDown className="chevron-down"/>
                  </Parallax.Layer>
                </Parallax.Layer>
              </section>

              <Preview {...jotit} id="jot-it" offset={0.3} speed={.5} className="featured01" />
              <Preview {...eastend} id="east-end" offset={0.394} speed={0.5} className="featured02" />
              <Preview {...upenn} id="upenn" offset={.488} speed={0.5} className="featured03" />
            </MediaQuery>

            <MediaQuery
              query="(max-device-width: 667px)" className="featured-preview-wrapper--sm">
              <section className="featured">
                <Parallax.Layer
                  offset={0}
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
                offset={0.306}
                speed={0.5}
                className={'featured01--sm'}>
                <Preview {...jotit} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={0.394}
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
            </MediaQuery>

            <Parallax.Layer
              offset={.59}
              speed={0.5}
              className={"see-more--wrapper"}>
              <Link to="/work">more projects</Link>
            </Parallax.Layer>

            <Parallax.Layer
              offset={.63}
              speed={0.5}
              style={{ height: 30 }}>
              <ContactCard/>
            </Parallax.Layer>

          <Parallax.Layer
            offset={.699}
            speed={0.5}
            style={{ height: 6 }}>
            <Footer/>
          </Parallax.Layer>

        </Parallax>
    );
  }
}
