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
    return (
      <Link to={this.route}>
        <div className={this.props.className}>
            <div id={this.props.id} className={this.position}>
              {this.props.name}
            </div>
        </div>
      </Link>
    );
  }
}
