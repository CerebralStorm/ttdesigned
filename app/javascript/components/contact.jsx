import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section name='contact' className="main-section contact" id="contact">
        <div className="row">
          <div className="col-lg-6 col-sm-7 wow fadeInLeft">
            <div className="contact-info-box address clearfix">
              <h3><i className="icon-map-marker"></i>Address:</h3>
              <span>308 Negra Arroyo Lane<br />Albuquerque, New Mexico, 87111.</span>
            </div>
            <div className="contact-info-box phone clearfix">
              <h3><i className="fa-phone"></i>Phone:</h3>
              <span>1-800-BOO-YAHH</span>
            </div>
            <div className="contact-info-box email clearfix">
              <h3><i className="fa-pencil"></i>email:</h3>
              <span>hello@knightstudios.com</span>
            </div>
            <div className="contact-info-box hours clearfix">
              <h3><i className="fa-clock-o"></i>Hours:</h3>
              <span><strong>Monday - Thursday:</strong> 10am - 6pm<br /><strong>Friday:</strong> People work on Fridays now?<br /><strong>Saturday - Sunday:</strong> Best not to ask.</span>
            </div>
            <ul className="social-link">
              <li className="twitter"><a href="#"><i className="fa-twitter"></i></a></li>
              <li className="facebook"><a href="#"><i className="fa-facebook"></i></a></li>
              <li className="pinterest"><a href="#"><i className="fa-pinterest"></i></a></li>
              <li className="gplus"><a href="#"><i className="fa-google-plus"></i></a></li>
              <li className="dribbble"><a href="#"><i className="fa-dribbble"></i></a></li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-5 wow fadeInUp delay-05s">
            <div className="form">

              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-group">
                  <input type="text" name="name" className="form-control input-text" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control input-text" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control input-text" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control input-text text-area" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validation"></div>
                </div>

                <div className="text-center"><button type="submit" className="input-btn">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
export { Contact };
