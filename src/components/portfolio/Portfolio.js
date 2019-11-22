import React from 'react';
import { Route, Redirect} from 'react-router-dom';

import PortfolioNav from './portfolioNav/PortfolioNav.js';
import PortfolioCarousel from './portfolioCarousel/PortfolioCarousel.js';
import About from './about/About.js';
import Contact from './contact/Contact.js';

import downarrow from '../../assets/images/down-arrow.png';


function Portfolio() {
  return (
  	<div className="portfolio-wrapper">
  		<div className="arrow">
			<a href="#portfolio">
				<img className="arrow-img" src={downarrow} alt='down-arrow' />
			</a>
  		</div>

	    <div className="portfolio" id="portfolio">
			<PortfolioNav />
	    	<Route exact path="/" component={About} />
	    	<Route exact path="/portfolio" component={PortfolioCarousel} />
	    	<Route exact path="/contact" component={Contact} />
	    </div>
	</div>
  );
}

export default Portfolio;
