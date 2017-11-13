import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Preview extends Component {
  get route() {
    return `/work/${this.props.id}`;
  }

  render() {
    return (
      <Link to={this.route}>
        <div className={this.route}>
            <div id={this.props.id}>
              <p>{this.props.name}</p>
              <p>{this.props.gh}</p>
              <p>{this.props.live}</p>
            </div>
        </div>
      </Link>
    );
  }
}
