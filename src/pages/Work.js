import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectPreview from '../components/ProjectPreview';
import Projects from '../projects.json';
import Parallax from 'react-springy-parallax';
import Tilt from 'react-tilt';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../components/Footer';

export default class Work extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  get position() {
    if ((this.props.index % 2) === 0) {
      return 'right';
    } else {
      return 'left';
    }
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

          <Tilt className="Tilt" options={{
              max : 30,
              perspective: 2000,
              scale: 1.1,
              reset: true,
              speed : 100
            }}  onMouseLeave={this.onMouseLeave}>
            <div className="Tilt-inner">

              <ScrollAnimation
                animateIn="bounceInUp"
                offset={30000}
                animateOut="bounceInUp"
                duration={'7s'}>
                <Link to={`/work/${id}`} className={`${boxClassName}`}>
                  <ProjectPreview index={indexInArray} {...projectAttributes} />
                  </Link>
              </ScrollAnimation>

            </div>
          </Tilt>

        </div>
      );
    });
  }

  render() {
    return (
      <Parallax ref="parallax" pages={5.5} speed={.5}>

        <div className="work__wrapper">
          <div className="work__header">
            <div className="work__header--title">Featured Projects</div>
          </div>

            {this.projects}

          </div>
        <Footer/>
      </Parallax>

    );
  }
}
