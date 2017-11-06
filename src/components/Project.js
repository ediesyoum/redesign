import React, { Component } from 'react';
import Blur from 'react-blur';
import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';
import ProjectLinks from './ProjectLinks';
import "animate.css/animate.min.css";
import ProjectNavigationLink from './ProjectNavigationLink';
import ScrollAnimation from 'react-animate-on-scroll';

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
  get headerBlurImg(){
    return `/img/${this.props.id}-desktop.jpg`;
  }
  get tags() {
    let tags = this.props.tags || [];
    return tags.map((tag) => {
      return <li className="project__tag">{tag}</li>;
    });
  }

  render() {
    return(
      <Parallax ref="parallax" className={'wrapper'} pages={6}>

        <Parallax.Layer offset={1.5} speed={.1} style={{ backgroundColor: '#805E73' }} />
        <Parallax.Layer offset={2} speed={.1} style={{ backgroundColor: '#87BCDE' }} />
        <Parallax.Layer offset={3} speed={.1} style={{ backgroundColor: '#6b1586' }} />

        <div className="project__header">
          <div className="project__header-title">
            {this.props.name}
          </div>
          <div className="header-blur">
            <Blur img={`/img/${this.props.id}-desktop.jpg`} blurRadius={6}/>
          </div>
        </div>



        <div className="project__summary box">

          <ScrollAnimation
            animateIn="bounceInUp"
            offset={300}
            animateOut="bounceInUp"
            duration={'3s'}>
            <div className="title--background">
              <h3>Project Details</h3>
            </div>
            <div><p>{this.props.summary}</p></div>
          </ScrollAnimation>


          <ScrollAnimation
            animateIn="fadeIn"
            offset={10000}
            animateOut="fadeIn"
            duration={'6s'}>
            <div className="title--background">
              <h3>Technical Details</h3>
            </div>
            <p>{this.props.technical}</p>
          </ScrollAnimation>

          <ProjectLinks links={this.props.links} />

          <ul className="project__tags">
            {this.tags}
          </ul>

          <nav className="project__navigation">
            <ProjectNavigationLink id={this.props.id} rel="previous" />
            <ProjectNavigationLink id={this.props.id} rel="next" />
          </nav>

        </div>

        <Footer/>
      </Parallax>
    );
  }
}
