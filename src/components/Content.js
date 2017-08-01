import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
		);
	}
}
