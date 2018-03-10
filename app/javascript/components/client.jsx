import React from 'react'

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section name='client' className="main-section client-part" id="client">
        <div className="container">
          <b className="quote-right wow fadeInDown delay-03"><i className="fa-quote-right"></i></b>
          <div className="row">
            <div className="col-lg-12">
              <p className="client-part-haead wow fadeInDown delay-05">It was a pleasure to work with the guys at Knight Studio. They made sure we were well fed and drunk all the time!</p>
            </div>
          </div>
          <ul className="client wow fadeIn delay-05s">
            <li>
              <a href="#">
                <img src="assets/client-pic1.jpg" alt="" />
                <h3>James Bond</h3>
                <span>License To Drink Inc.</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Client;
export { Client };
