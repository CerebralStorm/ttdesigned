import React from 'react'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="main-nav-outer" id="test">
        <div className="container">
          <ul className="main-nav">
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a onClick={(e) => {this.props.handleScrollToElement('portfolio')}}>Portfolio</a></li>
            <li className="small-logo"><a><img src="assets/small-logo.png" alt="" /></a></li>
            <li><a>Clients</a></li>
            <li><a>Team</a></li>
            <li><a>Contact</a></li>
          </ul>
          <a className="res-nav_click" href="#"><i className="fa-bars"></i></a>
        </div>
      </nav>
    );
  }
}

export default Nav;
export { Nav };
