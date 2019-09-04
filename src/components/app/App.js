import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import SmoothScroll from 'smoothscroll-for-websites';

import Banner from '../banner/Banner.js'
import Portfolio from '../portfolio/Portfolio.js'

SmoothScroll({ 
	stepSize: 50,  // [px]
	animationTime: 500, // [ms]
})

function App() {
  return (
    <div className="App">
    	<ParallaxProvider>
    		<Banner />
    	</ ParallaxProvider>

    	<Portfolio />
    </div>
  );
}

export default App;
