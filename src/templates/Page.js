import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';

export default class Page extends Component {
  render() {
    return (
			<div className="container">
				<div className="title">{this.props.title}</div>

				<div className="header">
          <img className="logo" alt='eden syoum' src={logo} />

          <div className="logo-square"></div>
				</div>

				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}
