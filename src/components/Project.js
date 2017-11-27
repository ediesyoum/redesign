import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import ProjectLinks from './ProjectLinks';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "animate.css/animate.min.css";
import ProjectNavigationLink from './ProjectNavigationLink';
import ScrollAnimation from 'react-animate-on-scroll';
import findImage from '../utils/FindImage';
import MediaQuery from 'react-responsive';

export default class Project extends Component {
  get headerClassName() {
    return `project__header--bg ${this.props.id}__header`;
  }
  get headerClassNameSM() {
    return `project__header--bg--sm ${this.props.id}__header`;
  }
  get headerTitleClassName() {
    return `${this.props.id}__header-title`;
  }
  get summaryClassName() {
    return `${this.props.id}__summary`;
  }
  get desktopProjectImgClassName() {
    return `project-image--desktop`;
  }
  get tabletProjectImgClassName() {
    return `project-image--tablet`;
  }
  get mobileProjectImgClassName() {
    return `project-image--mobile`;
  }
  projectImage(size = 'desktop') {
    return findImage(`${this.props.id}-${size}.jpg`);
  }
  get projectGraphic() {
    return findImage(`${this.props.id}.png`);
  }

  get tags() {
    let tags = this.props.tags || [];
    return tags.map((tag) => {
      return <li className="project__tag">{tag}</li>;
    });
  }

  render() {
    return(
        <div>
          <MediaQuery query="(min-device-width: 667px)">
            <Parallax ref="parallax" className={'project__wrapper'}>

              <Parallax.Layer className="project__header--wrapper">
                <img className={this.headerClassName} alt=""/>
              </Parallax.Layer>

              <Parallax.Layer offset={.5} speed={.1} style={{ height: 1600, backgroundColor: '#f9ffc3' }} />
              <Parallax.Layer offset={1.8} speed={.1} style={{ height: 1600, backgroundColor: '#805E73' }} />
              <Parallax.Layer offset={2.9} speed={.1} style={{ height: 1200, backgroundColor: '#ED8712' }} />

              <div className="project__header">
                <div className="project__header--title">
                  {this.props.name}
                </div>
              </div>

              <ScrollAnimation
                animateIn="bounceInUp"
                animateOut="bounceInUp"
                duration={'3s'}>

                <div className="project__summary">
                  <Grid fluid>
                    <Row>
                      <Col center="xs">
                        <h3 className="project-section-title__background">Project Description</h3>
                        <div><p className="project__description">{this.props.summary}</p></div>
                      </Col>
                    </Row>
                  </Grid>

                  <div className="slanted-bg"/>

                  <Grid fluid>
                    <Row>
                      <Col xsOffset={2} xs={6}>
                        <div className="image--perspective">
                          <img className={this.desktopProjectImgClassName} src={this.projectImage('desktop')} alt={`${this.props.id} Desktop Project`} title={`${this.props.id} Desktop Project`} />
                        </div>
                      </Col>
                      <Col xsOffset={6} xs={6}>
                        <div className="image--perspective">
                          <img className={this.mobileProjectImgClassName} alt={`${this.props.id} Mobile Project`} title={`${this.props.id} Mobile Project`} src={this.projectImage('mobile')} />
                        </div>
                      </Col>
                    </Row>
                    <Row center="xs">
                      <div className="project__technical">
                        <h3 className="project-section-title__background">Technical Details</h3>
                        {this.props.technical}
                      </div>
                    </Row>
                    <Row center="xs">
                      <div className="image--perspective">
                        <img src={this.projectGraphic} className="project__graphic" alt=""/>
                      </div>
                    </Row>
                    <Row center="xs">
                      <div className="project__tag--wrapper">
                        <section className="project__tags">
                          {this.tags}
                        </section>
                      </div>
                    </Row>
                  </Grid>
                </div>
              </ScrollAnimation>

              <div className="slanted-bg"/>

              <section className="project__links">
                <Grid fluid>
                  <Row>
                    <Col xsoffSet={0} xs={3}>
                      <ProjectLinks links={this.props.links} />
                    </Col>

                    <Col xs="end">
                      <div className="image--perspective">
                        <img className={this.tabletProjectImgClassName} src={this.projectImage('tablet')} alt={`${this.props.id} Tablet Project`} title={`${this.props.id} Tablet Project`}/>
                      </div>
                    </Col>

                  </Row>
                </Grid>
              </section>

              <nav className="project__navigation">
                <ProjectNavigationLink id={this.props.id} rel="previous" />
                <ProjectNavigationLink id={this.props.id} rel="next" />
              </nav>

              <section className="footer">
                <Grid fluid>
                  <Row>
                    <Col xs="start">
                      <p>Built with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
                    </Col>
                    <Col xs="end">
                      <Parallax.Layer
                        style={{ height: 30 }}
                        onClick={() => this.refs.parallax.scrollTo(0)}>
                        <span id="back-to-top" className="going-up" role="img" aria-label="Top Of Page">☝️</span>
                      </Parallax.Layer>
                    </Col>
                  </Row>
                </Grid>
              </section>
            </Parallax>
          </MediaQuery>

          <MediaQuery query="(max-device-width: 666px)">
            <Parallax ref="parallax" className={'project__wrapper'}>

            <Parallax.Layer className="project__header--wrapper" speed={.25}>
              <img className={this.headerClassNameSM} alt=""/>
            </Parallax.Layer>

              <Parallax.Layer offset={.5} speed={.1} style={{ backgroundColor: '#f9ffc3', height: 2000 }} />
              <Parallax.Layer offset={2} speed={.1} style={{ backgroundColor: '#87BCDE' }} />

              <div className="project__header">
                <div className="project__header--title-sm">
                  {this.props.name}
                </div>
              </div>

              <ScrollAnimation
                animateIn="bounceInUp"
                animateOut="bounceInUp"
                duration={'3s'}>

                <div className="project__summary project__summary--wrapper">

                  <div className="project-section-title__background--sm">
                    <h3>Project Summary</h3>
                  </div>

                  <div><p>{this.props.summary}</p></div>


                  <img className={this.desktopProjectImgClassName} src={this.projectImage('desktop')} alt={`${this.props.id} Desktop Project`} title={`${this.props.id} Desktop Project`} />


                  <div className="project-section-title__background--sm">
                    <h3>Technical Details</h3>
                  </div>
                  <div><p className="project__description">{this.props.technical}</p></div>



                  <section className="project__links">
                    <ProjectLinks links={this.props.links} />
                    <div><img className={this.tabletProjectImgClassName} src={this.projectImage('tablet')} alt={`${this.props.id} Tablet Project`} title={`${this.props.id} Tablet Project`}/></div>
                  </section>

                  <img className={this.mobileProjectImgClassName} alt={`${this.props.id} Mobile Project`} title={`${this.props.id} Mobile Project`} src={this.projectImage('mobile')} />

                  <div className="project__tag--wrapper">
                    <section className="project__tags">
                      {this.tags}
                    </section>
                  </div>

                  <nav className="project__navigation">
                    <ProjectNavigationLink id={this.props.id} rel="previous" />
                    <ProjectNavigationLink id={this.props.id} rel="next" />
                  </nav>
                </div>
              </ScrollAnimation>
              <section className="footer">
                <Grid fluid>
                  <Row>
                    <Col xs="start">
                      <p>Built with <span className="hearts" role="img"  aria-label="Love">❤️</span> by Eden Syoum</p>
                    </Col>
                    <Col xs="end">
                      <Parallax.Layer
                        style={{ height: 30 }}
                        onClick={() => this.refs.parallax.scrollTo(0)}>
                        <span id="back-to-top" className="going-up--sm" role="img" aria-label="Top Of Page">☝️</span>
                      </Parallax.Layer>
                    </Col>
                  </Row>
                </Grid>
              </section>
            </Parallax>
          </MediaQuery>
        </div>
    );
  }
}
