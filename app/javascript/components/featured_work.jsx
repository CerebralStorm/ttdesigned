import React from 'react'
import iphone from '../src/images/iphone.png'

class FeaturedWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section name='featured-work' className="main-section alabaster">
        <div className="container">
          <div className="row">
            <figure className="col-lg-5 col-sm-4 wow fadeInLeft">
              <img src={iphone} alt="" />
            </figure>
            <div className="col-lg-7 col-sm-8 featured-work">
              <h2>featured work</h2>
              <p className="padding-b">Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit.</p>
              <div className="featured-box">
                <div className="featured-box-col1 wow fadeInRight delay-02s">
                  <i className="fa-magic"></i>
                </div>
                <div className="featured-box-col2 wow fadeInRight delay-02s">
                  <h3>magic of theme development</h3>
                  <p>Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. </p>
                </div>
              </div>
              <div className="featured-box">
                <div className="featured-box-col1 wow fadeInRight delay-04s">
                  <i className="fa-gift"></i>
                </div>
                <div className="featured-box-col2 wow fadeInRight delay-04s">
                  <h3>neatly packaged</h3>
                  <p>Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. </p>
                </div>
              </div>
              <div className="featured-box">
                <div className="featured-box-col1 wow fadeInRight delay-06s">
                  <i className="fa-dashboard"></i>
                </div>
                <div className="featured-box-col2 wow fadeInRight delay-06s">
                  <h3>SEO optimized</h3>
                  <p>Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. </p>
                </div>
              </div>
              <a className="Learn-More" href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
export { FeaturedWork };
