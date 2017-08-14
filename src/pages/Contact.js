import React, { Component } from 'react';
import Content from '../components/Content';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Contact extends Component {
  render() {
    return (
      <Content title="Contact">

        <form method="POST" action="http://formspree.io/me@edencod.es">
          <Grid>


            <Col xs={12}>
              <Row center="xs">
                <Col end="xs">
                  <input type="name" name="name" placeholder="Your name"></input>
                </Col>

                <Col end="xs">
                  <input type="email" name="email"
                className="form-email" placeholder="Your email"></input>
                </Col>
              </Row>
            </Col>


            <Col xs={12}>
              <Row center="xs">
                <textarea name="message" className="form-message" placeholder="Your message"></textarea>
              </Row>
            </Col>


            <Col xs={12}>
              <Row center="xs">
                <button type="submit" className="send-btn">Send</button>
              </Row>
            </Col>
          </Grid>
        </form>

      </Content>
    );
  }
}
