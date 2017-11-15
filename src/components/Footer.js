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
              <p>Made with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
            </Col>
            <Col xs="end">
              <span role="img" aria-label="Top Of Page">☝️</span>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  };
};

export default Footer;
