import React from 'react'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section name='portfolio' className="main-section paddind" id="Portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <h6>Fresh portfolio of designs that will keep you wanting more.</h6>
          <div className="portfolioFilter">
            <ul className="Portfolio-nav wow fadeIn delay-02s">
              <li><a href="#" data-filter="*" className="current">All</a></li>
              <li><a href="#" data-filter=".branding">Branding</a></li>
              <li><a href="#" data-filter=".webdesign">Web design</a></li>
              <li><a href="#" data-filter=".printdesign">Print design</a></li>
              <li><a href="#" data-filter=".photography">Photography</a></li>
            </ul>
          </div>
        </div>
        <div className="portfolioContainer wow fadeInUp delay-04s">
          <div className=" Portfolio-box printdesign">
            <a href="#"><img src="/assets/Portfolio-pic1.jpg" alt="" /></a>
            <h3>Foto Album</h3>
            <p>Print Design</p>
          </div>
          <div className="Portfolio-box webdesign">
            <a href="#"><img src="/assets/Portfolio-pic2.jpg" alt="" /></a>
            <h3>Luca Theme</h3>
            <p>Web Design</p>
          </div>
          <div className=" Portfolio-box branding">
            <a href="#"><img src="/assets/Portfolio-pic3.jpg" alt="" /></a>
            <h3>Uni Sans</h3>
            <p>Branding</p>
          </div>
          <div className=" Portfolio-box photography">
            <a href="#"><img src="/assets/Portfolio-pic4.jpg" alt="" /></a>
            <h3>Vinyl Record</h3>
            <p>Photography</p>
          </div>
          <div className=" Portfolio-box branding">
            <a href="#"><img src="/assets/Portfolio-pic5.jpg" alt="" /></a>
            <h3>Hipster</h3>
            <p>Branding</p>
          </div>
          <div className=" Portfolio-box photography">
            <a href="#"><img src="/assets/Portfolio-pic6.jpg" alt="" /></a>
            <h3>Windmills</h3>
            <p>Photography</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
export { Portfolio };