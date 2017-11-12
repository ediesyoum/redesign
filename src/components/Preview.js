import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

export default class Preview extends Component {
  get route() {
    return `/work/${this.props.id}`;
  }

  render() {
    return (
      <a href={this.route}>
        <Parallax.Layer
          offset={this.props.offset}
          speed={this.props.speed}
          className={this.props.className}>

          <div id={this.props.id}>
            <p>{this.props.name}</p>
            <p>{this.props.gh}</p>
            <p>{this.props.live}</p>
          </div>
        </Parallax.Layer>
      </a>
    );
  }
}
