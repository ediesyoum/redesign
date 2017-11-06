import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';

export default class About extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={1} className={'wrapper'}>
        <main>
          <p>To put it plainly, Eden is a techie.</p>

          <div className="content">
            <p>I began my journey as a Web Designer. I then worked as an IT Specialist, consulting users and providing them with hardware and workflow support. My interests currently reside with Web Development and programming; I am new and constantly learning; eager to get my feet wet, gain mentorship and additional learning opportunities in this exciting and ever-changing field.</p>

            <p>Not only am I fascinated with web development and design, I enjoy staying current with the latest trends in the tech market, as well as exploring and trying out the newest hardware developments, fixes, updates and tweaks.</p>
          </div>
        </main>

        <Footer/>
      </Parallax>
    );
  }
}
