import React, { Component } from 'react';
import Content from '../components/Content';

export default class Contact extends Component {
  render() {
    return (
      <Content title="Contact">
        <form action="https://formspree.io/blablabla"
              method="POST">
            <input type="text" name="name" />
            <input type="email" name="_replyto" />
            <input type="submit" value="Send" />
        </form>
      </Content>
    );
  }
}
