import React from 'react'
import logo from '../src/images/footer-logo.png'
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-logo"><a href="#"><img src={logo} alt="" /></a></div>
          <span className="copyright">&copy; Knight Theme. All Rights Reserved</span>
          <div className="credits">
            <a href="https://bootstrapmade.com/bootstrap-agency-templates/">Bootstrap Agency Templates</a> by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
export { Footer };