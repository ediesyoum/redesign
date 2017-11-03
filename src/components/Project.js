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
  get summaryClassName () {
    return `${this.props.id}__summary`;
  }
  render() {
    return(
      <Parallax ref="parallax" className={'wrapper'} classpages={4}>

        <div className={this.headerClassName}>
          <div className={this.headerTitleClassName}>{this.props.name}</div>
        </div>

        <Blur img={`/img/${this.props.id}-desktop.jpg`}
          blurRadius={6}/>

        <div className={this.summaryClassName}>
          <p>{this.props.summary}</p>

          <p>{this.props.technical}</p>

          <p>{this.props.live}</p>

          <p>{this.props.gh}</p>

          <p>{this.props.tags}</p>
        </div>

      </Parallax>
    );
  }
}
