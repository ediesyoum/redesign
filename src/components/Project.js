import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import Blur from 'react-blur';
import image from '../assets/img/jot-it.png';

export default class Project extends Component {
  get headerClassName() {
    return `${this.props.id}-header`;
  }
  render() {
    return(
      <div>
        <div>
          <ImageZoom
            image={{
              src: `/projects/01-${this.props.id}.svg`,
              alt: this.props.name,
              style: { width: '65vh' }
            }}
            zoomImage={{
              src: `/projects/01-${this.props.id}.svg`,
              alt: this.props.name,
              style: { background: '#000000' }
            }}
          />
        </div>

        <Blur
          img={`/img/${this.props.id}-desktop.jpg`}
          className={this.headerClassName}
          blurRadius={6}
          >Helloooo</Blur>

        <div className="sup">{this.props.name}</div>

        <div className="box">{this.props.summary}</div>

        <div className="box">{this.props.technical}</div>

        <div className="box">{this.props.live}</div>

        <div className="box">{this.props.gh}</div>

        <div className="box">{this.props.tags}</div>

      </div>
    );
  }
}
