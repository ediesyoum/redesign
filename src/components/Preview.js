import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

export default class Preview extends Component {
  get route() {
    return `/work/${this.props.id}`;
  }
  get projectFeatureLinkClassName() {
    return `featured__link featured__link--${this.props.id}`;
  }

  render() {
    return (
        <div className={this.projectFeatureLinkClassName}>
          <Link to={this.route}>
            <FaAngleDoubleRight />
          </Link>
        </div>
    );
  }
}
