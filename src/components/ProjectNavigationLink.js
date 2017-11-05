import React, { Component } from 'react';
import projects from '../projects.json';

export default class ProjectNavigationLink extends Component {
  get projectKeys() {
    return Object.keys(projects);
  }

  get currentProjectIndex() {
    return this.projectKeys.indexOf(this.props.id);
  }

  get targetProjectIndex() {
    if (this.props.rel === "next") {
      return this.currentProjectIndex + 1;
    } else {
      return this.currentProjectIndex - 1;
    }
  }

  get targetProjectID() {
    return this.projectKeys[this.targetProjectIndex];
  }

  get url() {
    if (typeof(this.targetProjectID) === "undefined") {
      return '/work'
    } else {
      return `/work/${this.targetProjectID}`
    }
  }

  get title() {
    if (typeof(this.targetProjectID) === "undefined") {
      return "Back to Selected Work"
    } else {
      let direction = this.props.rel.charAt(0).toUpperCase() + this.props.rel.slice(1);
      return `${direction} Project`;
    }
  }

  render() {
    return(
      <a href={this.url} title={this.title}>{this.title}</a>
    )
  }
}
