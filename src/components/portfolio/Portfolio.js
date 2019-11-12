import React from 'react';

import PortfolioNav from './portfolioNav/PortfolioNav.js';
import PortfolioCarousel from './portfolioCarousel/PortfolioCarousel.js';
import About from './about/About.js';

import { Route } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
		<PortfolioNav />
    	<Route exact path="/" component={PortfolioCarousel} />
    	<Route path="/portfolio" component={PortfolioCarousel} />
    	<Route path="/about" component={About} />
    </div>
  );
}

export default Portfolio;
