import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
// import MotionMenu from '../../src';

export default class NavigationButton extends Component {
  render() {
    return (
      // <MotionMenu
      //   type="circle"
      //   margin={120}>

        <div className="menu">
          <p><FontAwesome name='bars' size='2x' /></p>

          <p><FontAwesome name='cogs' size='2x' /></p>
        </div>

      // </MotionMenu>
    )
  };
};
