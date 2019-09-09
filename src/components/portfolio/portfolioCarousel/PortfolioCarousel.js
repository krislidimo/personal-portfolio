import React from 'react';
import Slider from "react-slick";

import ProjectCard from '../projectCard/ProjectCard.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/images/It's_Over_9000.PNG";

class PortfolioCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          'title': "It's Over 900",
          'src': img1,
          'id': '00'
        },
        {
          'title': "Nifty Market",
          'src': "",
          'id': '01'
        },
        {
          'title': "Mympy",
          'src': "",
          'id': '02'
        },
        {
          'title': "Macro Calculator",
          'src': "",
          'id': '03'
        }
      ]
    }
  }
  
  render () {
  	const settings = {
		  infinite: true,
		  centerPadding: "60px",
		  slidesToShow: 3,
      dots: true,
		  speed: 500,
      // vertical: true,
      // verticalSwiping: true,
		};

	  return (
	    <div className="portfolio-carousel">
	    	<Slider {...settings}>
          {this.state.projects.map(project => {
            return <div key={project.id}>
              <ProjectCard project={project}/>
            </div>
          })}
        </Slider>
	    </div>
	  );
	}
}

export default PortfolioCarousel;
