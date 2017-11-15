import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';
import ProjectLinks from './ProjectLinks';
import "animate.css/animate.min.css";
import ProjectNavigationLink from './ProjectNavigationLink';
import ScrollAnimation from 'react-animate-on-scroll';
import findImage from '../utils/FindImage';

export default class Project extends Component {
  get headerClassName() {
    return `${this.props.id}__header`;
  }
  get headerTitleClassName() {
    return `${this.props.id}__header-title`;
  }
  get summaryClassName() {
    return `${this.props.id}__summary`;
  }
  get desktopProjectImgClassName() {
    return `project-image--desktop`;
  }
  get tabletProjectImgClassName() {
    return `project-image--tablet`;
  }
  get mobileProjectImgClassName() {
    return `project-image--mobile`;
  }

  projectImage(size = 'desktop') {
    return findImage(`${this.props.id}-${size}.jpg`);
  }

  get tags() {
    let tags = this.props.tags || [];
    return tags.map((tag) => {
      return <li className="project__tag">{tag}</li>;
    });
  }

  render() {
    return(
      <Parallax ref="parallax" className={'project__wrapper'} pages={10}>

        <Parallax.Layer offset={.5} speed={.1} style={{ backgroundColor: '#FECC52' }} />
        <Parallax.Layer offset={1.3} speed={.1} style={{ backgroundColor: '#805E73' }} />
        <Parallax.Layer offset={2} speed={.1} style={{ backgroundColor: '#87BCDE' }} />
        <Parallax.Layer offset={3} speed={.1} style={{ backgroundColor: '#6b1586' }} />

        <div className="project__header">
          <div className="project__header-title">
            {this.props.name}
          </div>
        </div>

        <ScrollAnimation
          animateIn="bounceInUp"
          animateOut="bounceInUp"
          duration={'3s'}>
          <div className="project__summary">

            <div className="title--background">
              <h3>Project Summary</h3>
            </div>

            <div><p>{this.props.summary}</p></div>


            <img className={this.desktopProjectImgClassName} src={this.projectImage('desktop')} />


            <div className="title--background">
              <h3>Technical Details</h3>
            </div>
            <p>{this.props.technical}</p>


            <section className="project__links">
              <ProjectLinks links={this.props.links} />
              <div><img className={this.tabletProjectImgClassName} src={this.projectImage('tablet')} /></div>
            </section>

            <ul className="project__tags">
              <img className={this.mobileProjectImgClassName} src={this.projectImage('mobile')} />
              {this.tags}
            </ul>

            <nav className="project__navigation">
              <ProjectNavigationLink id={this.props.id} rel="previous" />
              <ProjectNavigationLink id={this.props.id} rel="next" />
            </nav>
          </div>
        </ScrollAnimation>
        <Footer/>
      </Parallax>
    );
  }
}
