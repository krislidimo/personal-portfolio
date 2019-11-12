import React from 'react';

import { NavLink } from 'react-router-dom'

function PortfolioNav() {
	return (
		<div className="portfolio-nav">
			<h2 className="name">Krisli Dimo</h2>
			<nav>
				<NavLink className="nav-item" to="/portfolio">Portfolio</NavLink>
				<NavLink className="nav-item" to="/about">About</NavLink>
			</nav>
		</div>
	);
}

export default PortfolioNav;
