import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectPreview extends Component {
  get route() {
    return `/work/${this.props.id}`
  }

  get position() {
    if ((this.props.index % 2) === 0) {
      return 'right';
    } else {
      return 'left';
    }
  }

  render() {
    const jotit_img = './assets/img/jot-it.png';
    return (
      <div id={this.props.id} className={this.position}>
        <p>
          <Link to={this.route}>{this.props.name}</Link>
        </p>
      </div>
    );
  }
}
