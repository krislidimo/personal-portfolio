import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import SmoothScroll from 'smoothscroll-for-websites';

import Banner from '../banner/Banner.js'

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
    	
    	<div style={{
				height: '100vh',
				'background-image': 'linear-gradient(to right, #262662 , #39387A)'
			}}>
			</div>
    </div>
  );
}

export default App;
