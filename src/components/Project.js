import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import Blur from 'react-blur';
import Parallax from 'react-springy-parallax';

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
  render() {
    return(
      <Parallax ref="parallax" className={'wrapper'} pages={6}>


        <Parallax.Layer offset={1} speed={.1} style={{ backgroundColor: '#805E73' }} />
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

          <div className="title--background"><h3>Project Details</h3></div>
            <p>{this.props.summary}</p>

          <div className="title--background"><h3>Technical Details</h3></div>
            <p>{this.props.technical}</p>

          <section className="btn-group">
            <div className="btn"><a href={`${this.props.live}`} target="_blank">DEMO</a></div>


            <div className="btn"><a href={`${this.props.gh}`} target="_blank">SEE GITHUB</a></div>
          </section>

          <p>{this.props.tags}</p>

        </div>

      </Parallax>
    );
  }
}
