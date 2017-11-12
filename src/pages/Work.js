import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';
import Tilt from 'react-tilt';

export default class Work extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  get projects() {
    let projectIDs = Object.keys(Projects);

    return projectIDs.map((id) => {
      let projectAttributes = Projects[id];
      let boxClassName = `projectcard projectcard--${id}`;
      let indexInArray = projectIDs.indexOf(id);

      projectAttributes.id = id;

      return(
        <Tilt
          className="Tilt"
          options={{
            max : 25,
            height: 300,
            width: 300,
            perspective: 2000,

            speed : 500,
            easing: "cubic-bezier(.03,.98,.52,.99)"
          }}
          onMouseLeave={this.onMouseLeave}>
            <div className="Tilt-inner">
              <ProjectPreview {...projectAttributes} index={indexInArray} className={boxClassName} />
            </div>
        </Tilt>
      );
    });
  }

  render() {
    return (
        <div>
          <MediaQuery query="(max-device-width: 768px)">
            <Parallax ref="parallax" className={'work__wrapper'} pages={4.845} speed={.5}>
              <div className="work__header">
                <div className="work__header--title">
                  <h1>Featured Projects</h1>
                </div>
              </div>
              <ScrollAnimation
                animateIn="bounceInUp"
                offset={30000}
                animateOut="bounceInUp"
                duration={'7s'}>
                <div className="flex-wrapper-sm">
                  {this.projects}
                </div>
              </ScrollAnimation>
              <Footer/>
            </Parallax>
            </MediaQuery>

            <MediaQuery query="(min-device-width: 768px)">
              <Parallax ref="parallax" className={'work__wrapper'} pages={2.85} speed={.5}>
                <div className="work__header">
                  <div className="work__header--title">
                    <h1>Featured Projects</h1>
                  </div>
                </div>
                <ScrollAnimation
                  animateIn="bounceInUp"
                  offset={30000}
                  animateOut="bounceInUp"
                  duration={'7s'}>
                  <div className="flex-wrapper-lg">
                    {this.projects}
                  </div>
                </ScrollAnimation>
                <Footer/>
              </Parallax>

            </MediaQuery>
      </div>

    );
  }
}
