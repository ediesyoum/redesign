import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ImageZoom from 'react-medium-image-zoom';


export default class Project extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
    console.log(scrollPos);
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
                    src: `/projects/01-${this.props.name}.svg`,
                    alt: 'Jot It App',
                    style: { width: '65vh' }
                  }}
                  zoomImage={{
                    src: '/projects/01-jot-it.svg',
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
