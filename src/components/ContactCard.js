import React, { Component } from 'react';
import EmailIcon from 'react-icons/lib/fa/envelope-square';
import GithubIcon from 'react-icons/lib/fa/github-square';
import InstagramIcon from 'react-icons/lib/fa/instagram';

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <p>Get in Touch</p>
        <nav>
          <a className="contact-card__link" href="mailto:me@edencod.es" title="Email">
            <EmailIcon />
          </a>
          <a className="contact-card__link" href="https://github.com/ediesyoum" title="GitHub">
            <GithubIcon />
          </a>
          <a className="contact-card__link" href="https://instagram.com/ediesyoum" title="Instagram">
            <InstagramIcon />
          </a>
        </nav>
      </div>
    )
  }
}

export default ContactCard;
