import React, { Component } from 'react';
import Content from '../components/Content';

export default class Contact extends Component {
  render() {
    return (
      <Content title="Contact">

        <form method="POST" action="http://formspree.io/me@edencod.es">
          <input type="email" name="email" placeholder="Your email"></input>
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>

      </Content>
    );
  }
}
