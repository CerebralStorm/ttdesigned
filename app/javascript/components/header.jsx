import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header" id="header">
        <div className="container">
          <figure className="logo animated fadeInDown delay-07s">
            <a href="#"><img src="/assets/logo.png" alt="" /></a>
          </figure>
          <h1 className="animated fadeInDown delay-07s">Welcome To TTDesign</h1>
          <ul className="we-create animated fadeInUp delay-1s">
            <li>We are a digital agency that loves crafting beautiful websites.</li>
          </ul>
          <a className="link animated fadeInUp delay-1s servicelink" href="#service">Get Started</a>
        </div>
      </header>
    );
  }
}

export default Header;
export { Header };
