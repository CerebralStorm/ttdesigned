import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './header'
import Service from './service'
import FeaturedWork from './featured_work'
import Porfolio from './portfolio'
import Client from './client'
import ClientLogo from './client_logo'
import Team from './team'
import Contact from './contact'
import Footer from './footer'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from '../src/images/small-logo.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let navbar = document.getElementById("navbar")
    let header = document.getElementById("header")
    let service = document.getElementById("service")
    if (window.pageYOffset >= header.offsetHeight) {
      navbar.classList.add("sticky");
      service.classList.add("scroll-padding");
    } else {
      navbar.classList.remove("sticky");
      service.classList.remove("scroll-padding");
    }
  }

  render() {
    return (
      <div>
        <Header />
        <nav className="main-nav-outer" id="navbar">
          <div className="container">
            <ul className="main-nav">
              <li>
                <Link activeClass="active" to="header" spy={true} smooth={true} offset={-90} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="service" spy={true} smooth={true} offset={-90} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-90} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li className="small-logo"><a><img src={logo} alt="" /></a></li>
              <li>
                <Link activeClass="active" to="client" spy={true} smooth={true} offset={-90} duration={500}>
                  Clients
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="team" spy={true} smooth={true} offset={-90} duration={500}>
                  Team
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-90} duration={500}>
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
        <ClientLogo />
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