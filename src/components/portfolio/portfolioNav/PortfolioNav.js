import React from 'react';
import { NavLink } from 'react-router-dom'

function PortfolioNav() {
	return (
		<div className="portfolio-nav">
			<h2 className="name">Krisli Dimo</h2>
			<nav>
				<NavLink className="nav-item" exact to="/">About</NavLink>
				<NavLink className="nav-item" exact to="/portfolio">Portfolio</NavLink>
				<NavLink className="nav-item" exact to="/Contact">Contact</NavLink>
			</nav>
		</div>
	);
}

export default PortfolioNav;
