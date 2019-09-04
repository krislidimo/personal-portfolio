import React from 'react';
import Slider from "react-slick";

import ProjectCard from '../projectCard/ProjectCard.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class PortfolioCarousel extends React.Component {
  render () {
  	const settings = {
		  className: "center",
		  centerMode: true,
		  infinite: true,
		  centerPadding: "60px",
		  slidesToShow: 3,
		  speed: 500
		};

	  return (
	    <div className="portfolio-carousel">
	    	<Slider {...settings}>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
        </Slider>
	    </div>
	  );
	}
}

export default PortfolioCarousel;
