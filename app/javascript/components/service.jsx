import React from 'react'

class Service extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section name='service' className="main-section" id="service">
        <div className="container">
          <h2>Services</h2>
          <h6>We offer exceptional service with complimentary hugs.</h6>
          <div className="row">
            <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
              <div className="service-list">
                <div className="service-list-col1">
                  <i className="fa-paw"></i>
                </div>
                <div className="service-list-col2">
                  <h3>branding &amp; identity</h3>
                  <p>Proin iaculis purus digni consequat sem digni ssim. Donec entum digni ssim.</p>
                </div>
              </div>
              <div className="service-list">
                <div className="service-list-col1">
                  <i className="fa-gear"></i>
                </div>
                <div className="service-list-col2">
                  <h3>web development</h3>
                  <p>Proin iaculis purus consequat sem digni ssim. Digni ssim porttitora .</p>
                </div>
              </div>
              <div className="service-list">
                <div className="service-list-col1">
                  <i className="fa-apple"></i>
                </div>
                <div className="service-list-col2">
                  <h3>mobile design</h3>
                  <p>Proin iaculis purus consequat digni sem digni ssim. Purus donec porttitora entum.</p>
                </div>
              </div>
              <div className="service-list">
                <div className="service-list-col1">
                  <i className="fa-medkit"></i>
                </div>
                <div className="service-list-col2">
                  <h3>24/7 Support</h3>
                  <p>Proin iaculis purus consequat sem digni ssim. Sem porttitora entum.</p>
                </div>
              </div>
            </div>
            <figure className="col-lg-8 col-sm-6  text-right wow fadeInUp delay-02s">
              <img src="/assets/macbook-pro.png" alt="" />
            </figure>

          </div>
        </div>
      </section>
    );
  }
}

export default Service;
export { Service };
