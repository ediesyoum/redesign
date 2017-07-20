import React, { Component } from 'react';
import Page from '../templates/Page';

export default class About extends Component {
  render() {
    return (
      <Page title="About">
        <p>To put it plainly, Eden is a techie.</p>

        <div className="content">
          <p>I began my journey as a Web Designer. I then worked as an IT Specialist, consulting users and providing them with hardware and workflow support. My interests currently reside with Web Development and programming; I am new and constantly learning; eager to get my feet wet, gain mentorship and additional learning opportunities in this exciting and ever-changing field.</p>

          <p>Not only am I fascinated with web development and design, I enjoy staying current with the latest trends in the tech market, as well as exploring and trying out the newest hardware developments, fixes, updates and tweaks.</p>
        </div>
      </Page>
    );
  }
}
