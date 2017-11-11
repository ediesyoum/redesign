import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import Tilt from 'react-tilt';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../components/Footer';
import MediaQuery from 'react-responsive';

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
        <div>
        <MediaQuery
          query="(min-device-width: 768px)">
          <div className="flex-wrapper-sm">

            <Tilt className="Tilt" options={{
                max : 35,
                perspective: 3000,
                scale: 1.1,
                reset: true,
                speed : 500
              }}  onMouseLeave={this.onMouseLeave}>
              <div className="Tilt-inner">

              <ScrollAnimation
                animateIn="bounceInUp"
                offset={30000}
                animateOut="bounceInUp"
                duration={'7s'}
                >
                <Link to={`/work/${id}`} className={`${boxClassName}`}>
                  <ProjectPreview index={indexInArray} {...projectAttributes} />
                  </Link>
              </ScrollAnimation>

            </div>
          </Tilt>
          </div>
        </MediaQuery>

        <MediaQuery
          query="(max-device-width: 768px)">
          <div className="flex-wrapper-lg">

            <Tilt className="Tilt" options={{
                max : 35,
                perspective: 3000,
                scale: 1.1,
                reset: true,
                speed : 500
              }}  onMouseLeave={this.onMouseLeave}>
              <div className="Tilt-inner">

              <ScrollAnimation
                animateIn="bounceInUp"
                offset={30000}
                animateOut="bounceInUp"
                duration={'7s'}
                >
                <Link to={`/work/${id}`} className={`${boxClassName}`}>
                  <ProjectPreview index={indexInArray} {...projectAttributes} />
                  </Link>
              </ScrollAnimation>

            </div>
          </Tilt>
          </div>
        </MediaQuery>
      </div>
      );
    });
  }

  render() {
    return (
      <Parallax ref="parallax" className={'work__wrapper'} pages={5} speed={.5}>

          <div className="work__header">
            <div className="work__header--title">
              <h1>Featured Projects</h1>
            </div>
          </div>

            {this.projects}

        <Footer/>
      </Parallax>

    );
  }
}
