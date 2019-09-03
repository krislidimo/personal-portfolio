import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Banner from '../banner/Banner.js'

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
