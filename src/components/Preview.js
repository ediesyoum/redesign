import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Preview extends Component {
  get route() {
    return `/work/${this.props.id}`;
  }
  get projectFeatureLinkClassName() {
    return `${this.props.id}___feature--link`;
  }

  render() {
    return (
      <Link to={this.route}>
        <div className={this.projectFeatureLinkClassName}>
          {this.props.name}
        </div>
      </Link>
    );
  }
}
