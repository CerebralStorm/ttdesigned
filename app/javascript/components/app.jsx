import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './header'
import Service from './service'
import FeaturedWork from './featured_work'
import Porfolio from './portfolio'
import Client from './client'
import Team from './team'
import Contact from './contact'
import Footer from './footer'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <nav className="main-nav-outer" id="test">
          <div className="container">
            <ul className="main-nav">
              <li>
                <Link activeClass="active" to="header" spy={true} smooth={true} offset={50} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="service" spy={true} smooth={true} offset={50} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li className="small-logo"><a><img src="/assets/small-logo.png" alt="" /></a></li>
              <li>
                <Link activeClass="active" to="client" spy={true} smooth={true} offset={50} duration={500}>
                  Clients
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="team" spy={true} smooth={true} offset={50} duration={500}>
                  Team
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
            <a className="res-nav_click" href="#"><i className="fa-bars"></i></a>
          </div>
        </nav>
        <Service />
        <FeaturedWork />
        <Porfolio />
        <Client />

        <div className="c-logo-part">
          <div className="container">
            <ul>
              <li><a href="#"><img src="/assets/c-liogo1.png" alt="" /></a></li>
              <li><a href="#"><img src="/assets/c-liogo2.png" alt="" /></a></li>
              <li><a href="#"><img src="/assets/c-liogo3.png" alt="" /></a></li>
              <li><a href="#"><img src="/assets/c-liogo4.png" alt="" /></a></li>
              <li><a href="#"><img src="/assets/c-liogo5.png" alt="" /></a></li>
            </ul>
          </div>
        </div>

        <Team />
        <section className="business-talking">

          <div className="container">
            <h2>Let’s Talk Business.</h2>
          </div>
        </section>

        <div className="container">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
export { App };