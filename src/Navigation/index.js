import React, { Component } from 'react';
import NavigationButton from './Button';
import NavigationMenu from './Menu';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }
  showMenu() {
    this.setState({ opened: !this.state.opened });
  }
  render() {
    if (this.state.opened) {
      return <NavigationMenu />;
    } else {
      return <NavigationButton onClick={this.showMenu.bind(this)} />;
    }
  }
}
