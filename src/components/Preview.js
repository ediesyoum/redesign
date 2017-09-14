import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <p>{this.props.name}</p>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}
