import React from 'react';
import SmoothScroll from 'smoothscroll-for-websites';

import Banner from '../banner/Banner.js'
import Portfolio from '../portfolio/Portfolio.js'

SmoothScroll({ 
	stepSize: 30,  // [px]
	animationTime: 500, // [ms]
})

function App() {
  return (
    <div className="App">
      <Banner />
    	<Portfolio />
    </div>
  );
}

export default App;
