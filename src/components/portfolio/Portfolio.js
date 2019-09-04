import React from 'react';

import PortfolioNav from './portfolioNav/PortfolioNav.js';
import PortfolioCarousel from './portfolioCarousel/PortfolioCarousel.js';

function Portfolio() {
  return (
    <div className="portfolio">
      <PortfolioNav />
      <PortfolioCarousel />
    </div>
  );
}

export default Portfolio;
