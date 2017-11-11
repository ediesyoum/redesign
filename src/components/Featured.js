import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';

export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let csm = Projects['csm'];
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

              <Parallax.Layer
                offset={0.3}
                speed={.5}
                className={'featured01'}>
                <Preview {...jotit} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={0.394}
                speed={0.5}
                className={'featured02'}>
                <Preview {...csm} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={.488}
                speed={0.5}
                className={'featured03'}>
                <Preview {...csm} />
              </Parallax.Layer>
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
                <Preview {...csm} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={.488}
                speed={0.5}
                className={'featured03--sm'}>
                <Preview {...csm} />
              </Parallax.Layer>
            </MediaQuery>

            <Parallax.Layer
              offset={.59}
              speed={0.5}
              className={"see-more--wrapper"}>
              <a href="#">more projects</a>
            </Parallax.Layer>

            <Parallax.Layer
              offset={.63}
              speed={0.5}
              style={{ height: 30 }}>
              <ContactCard/>
            </Parallax.Layer>

          <Parallax.Layer
            offset={.74}
            speed={0.5}
            style={{ height: 6 }}>
            <Footer/>
          </Parallax.Layer>

        </Parallax>
    );
  }
}
