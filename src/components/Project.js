import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ImageZoom from 'react-medium-image-zoom';


export default class Project extends Component {
  componentDidMount() {
          console.log('Hi');
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    console.log(document.documentElement.scrollTop + 'px');
  }

  render() {
    console.log('I was triggered during render');
    if (this.props.position === 'left') {
    } else {
      return(
          <Grid>
            <Row>
              <Col start="xs">
                <ImageZoom
                  image={{
                    src: `/projects/02-${this.props.name}.png`,
                    alt: 'Jot It App',
                    className: 'portfolio-img-01',
                    style: { width: '65vh' }
                  }}
                  zoomImage={{
                    src: '/projects/02-jot-it.png',
                    alt: 'Jot It',
                    style: { background: '#000000' }
                  }}
                />
              </Col>

              <Col end="xs" className="box">
                <div>{this.props.children}</div>
              </Col>

            </Row>
          </Grid>
      );
    }
  }
}
