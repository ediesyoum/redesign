import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';

export default class Project extends Component {
  render() {
    if (this.props.position === 'left') {

    } else {
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

          <div className="box">{this.props.technical}</div>

        </div>
      );
    }
  }
}
