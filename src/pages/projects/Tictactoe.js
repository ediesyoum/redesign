import React, { Component } from 'react';
import Project from '../../components/Project';
import ProjectData from '../../projects.json';

export default class TicTacToe extends Component {
  render() {
    let tictactoe = ProjectData['tic-tac-toe'];
    return (

        <Project {...tictactoe} />

    );
  }
}
