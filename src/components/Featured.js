import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Preview from '../components/Preview';
import Projects from '../projects.json';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import Footer from '../components/Footer';


export default class Featured extends Component {
  render() {
    let jotit = Projects['jot-it'];
    let csm = Projects['csm'];
    return (
        <Parallax ref="parallax" pages={1.442} className={'featured-wrapper scrollbar'}>

          <section className="featured">

            <Parallax.Layer
              offset={0}
              speed={.5}
              className={'featured-bg--content'}
              style={{ height: 300 }}>

              <p>Featured Projects</p>

              <Parallax.Layer
                style={{ height: 300 }}
                onClick={() => this.refs.parallax.scrollTo(.199)}>
                <FaChevronCircleDown className="chevron-down"/>
              </Parallax.Layer>

            </Parallax.Layer>
          </section>

          <Parallax.Layer
            offset={0.3}
            speed={.5}
            className={'feature01-desktop'}
            style={{ height: 300 }}>
            <Preview {...jotit} />
          </Parallax.Layer>

          <Parallax.Layer
            offset={0.5}
            speed={0.5}
            className={'feature02-desktop'}
            style={{ height: 300 }}>
            <Preview {...csm} />
          </Parallax.Layer>

          <Parallax.Layer
            offset={.7}
            speed={0.5}
            className={'feature03-desktop'}
            style={{ height: 300 }}>
            <Preview {...csm} />
          </Parallax.Layer>

          <Parallax.Layer
            offset={.9}
            speed={0.5}
            style={{ height: 6 }}>
            <Footer/>
          </Parallax.Layer>

        </Parallax>
    );
  }
}
