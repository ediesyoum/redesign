import React, { Component } from 'react';
import { FaGithub, FaShareSquareO } from 'react-icons/lib/fa';

class ProjectLink {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }

  get title() {
    if (this.id === 'live') {
      return 'DEMO';
    } else {
      let title = this.id.toUpperCase();
      return `SEE ${title}`;
    }
  }

  get icon() {
    switch(this.id) {
      case 'github':
        return <FaGithub />;
      case 'live':
        return <FaShareSquareO />;
      default:
        return "";
    }
  }
}

export default class ProjectLinks extends Component {
  get links() {
    let links = this.props.links || {};
    return Object.keys(links).map((id) => {
      let url = this.props.links[id];
      let link = new ProjectLink(id, url);

      return(
        <div className="btn">
          <a href={link.url} target="_blank">
            {link.icon} {link.title}
          </a>
        </div>
      );
    });
  }

  render() {
    return(
      <section className="btn-group">
        {this.links}
      </section>
    );
  }
}
