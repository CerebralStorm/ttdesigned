import React from 'react'
import cliogo1 from '../src/images/c-liogo1.png'
import cliogo2 from '../src/images/c-liogo2.png'
import cliogo3 from '../src/images/c-liogo3.png'
import cliogo4 from '../src/images/c-liogo4.png'
import cliogo5 from '../src/images/c-liogo5.png'

class ClientLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="c-logo-part">
        <div className="container">
          <ul>
            <li><a href="#"><img src={cliogo1} alt="" /></a></li>
            <li><a href="#"><img src={cliogo2} alt="" /></a></li>
            <li><a href="#"><img src={cliogo3} alt="" /></a></li>
            <li><a href="#"><img src={cliogo4} alt="" /></a></li>
            <li><a href="#"><img src={cliogo5} alt="" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ClientLogo;
export { ClientLogo };