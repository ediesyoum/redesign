import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';


export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let csm = Projects['csm'];
    return (
        <Parallax ref="parallax" pages={1.448}               speed={.5} className={'featured-wrapper scrollbar'}>

            <MediaQuery query="(min-device-width: 500px)" className="featured-preview-wrapper">

              <section className="featured">

                <Parallax.Layer
                  offset={0}
                  speed={.5}
                  className={'featured-bg--content'}>

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
                className={'feature01'}>
                <Preview {...jotit} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={0.394}
                speed={0.5}
                className={'feature02'}>
                <Preview {...csm} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={.488}
                speed={0.5}
                className={'feature03'}>
                <Preview {...csm} />
              </Parallax.Layer>
            </MediaQuery>

            <MediaQuery query="(max-device-width: 500px)" className="featured-preview-wrapper--sm">
              <section className="featured">

                <Parallax.Layer
                  offset={0}
                  speed={.5}
                  className={'featured-bg--content'}>

                  <p>Featured Projects</p>

                  <Parallax.Layer

                    onClick={() => this.refs.parallax.scrollTo(0.211)}>
                    <FaChevronCircleDown className="chevron-down"/>
                  </Parallax.Layer>

                </Parallax.Layer>
              </section>


              <Parallax.Layer
                offset={0.306}
                speed={.5}
                className={'feature01--sm'}>
                <Preview {...jotit} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={0.394}
                speed={0.5}
                className={'feature02--sm'}>
                <Preview {...csm} />
              </Parallax.Layer>

              <Parallax.Layer
                offset={.488}
                speed={0.5}
                className={'feature03--sm'}>
                <Preview {...csm} />
              </Parallax.Layer>
            </MediaQuery>

          <Parallax.Layer
            offset={.75}
            speed={0.5}
            style={{ height: 6 }}>
            <Footer/>
          </Parallax.Layer>

        </Parallax>
    );
  }
}
