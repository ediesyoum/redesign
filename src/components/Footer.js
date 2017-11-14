import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Row } from 'react-flexbox-grid';

class Footer extends Component {
  render () {
    return (
      <section className="footer">
        <Grid fluid>
          <Row>
            <Col xs="start">
              <p>Made with <span className="hearts">❤️</span> by Eden Syoum</p>
            </Col>
            <Col xs="end">
              ☝️
            </Col>
          </Row>
        </Grid>
      </section>
    )
  };
};

export default Footer;
