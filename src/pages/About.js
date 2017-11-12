import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Footer from '../components/Footer';

export default class About extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={1.5} className={'about__wrapper'}>

          <div className="about__header">
            <h1 className=" about__header--title">About</h1>
          </div>

          <main>
            <section className="about__content">
              <h3>A User-Focused Developer</h3>

              <p>Throughout my technical career, I have worked hard to be a user advocate.  As an IT consultant turned web developer, I have spent several years studying user habits, seeing their pain points first hand, working tirelessly to resolve and prevent future obstacles. This is why designing with consideration and empathy for the user’s experience comes naturally to me - it empowers me to create visually engaging, functional and aesthetic products that humans will truly love to use, and use often.</p>

              <a href="#">See Background</a>


              <h3>Background:</h3>

              <p>Creating graphics and simple HTML and CSS snippets became a hobby for me around the age of 12. It was at this time that web design became the center of my world - I would go on to build websites and blogs, host domains and design beautiful user interfaces, brands, logos and complex graphics of all kinds. I did web design for six years until I went to college, where I studied political and social sciences. Following graduation, I sought out technical work where I could design, code AND help everyday people to better use tech to their advantage, and I eventually found this in doing web design and working as an IT consultant at the University of Pennsylvania.</p>

              <p>Flash forward to 2014, and major advances in JavaScript and mobile development and design have completely revamped the state of the web. For the past three years, I have worked to gain experience with a variety of [link: projects], delving deeper into my lifelong love of code and well-implemented UI/UX design. As of recent, I have become very interested in ReactJS for its ease of usability via components, and how powerful and portable it is as an front end tool for interactive UX design. [link: See my case study on my first ReactJS project.]</p>
            </section>
        </main>

        <Footer/>
      </Parallax>
    );
  }
}
