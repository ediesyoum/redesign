import React, { Component } from 'react';
import NavigationButton from './Button';

export default class Navigation extends Component {
  render() {
    if (this.state.opened) {
      return <NavigationMenu />;
    } else {
      return <NavigationButton />;
    }
  }
}
