import React from 'react';
import SmoothScroll from 'smooth-scroll';

import Banner from '../banner/Banner.js'
import Portfolio from '../portfolio/Portfolio.js'

class App extends React.Component {
	
	componentDidMount() {
		var scroll = new SmoothScroll('a[href*="#"]', {
		    speed: 2000
		});
	}

	render() {
		return (
			<div className="App">
				<Banner />
				<Portfolio />
			</div>
		);
	}
}

export default App;
