import React, { Component } from 'react';

export default class ProjectPreview extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
