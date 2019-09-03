import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import mountain from '../../assets/images/mountain/mountain.jpg';
import landscapeRight from '../../assets/images/mountain/landscape-right.png';
import landscapeLeft from '../../assets/images/mountain/landscape-left.png';
import forest1 from '../../assets/images/mountain/forest-1.png';
import forest2 from '../../assets/images/mountain/forest-2.png';
import forest3 from '../../assets/images/mountain/forest-3.png';
import mountainBase from '../../assets/images/mountain/mountain-base.png';
import mountainMid from '../../assets/images/mountain/mountain-mid.png';
import mountainPeak from '../../assets/images/mountain/mountain-peak.png';

function Banner() {
  return (
    <div className="banner">
	    <ParallaxBanner
		    className="your-class"
		    layers={[
	        {
            image: mountain,
            amount: 0.53,
            expanded: false,
	        },
	        {
            image: mountainPeak,
            amount: 0.48,
            expanded: false,
	        },
	        {
            children: <div className='header-wrapper'><h1 className='header'>Krisli Dimo</h1></div>,
            amount: 1,
            expanded: false,
	        },
	        {
            image: mountainMid,
            amount: 0.44,
            expanded: false,
	        },
	        {
            children: <div className='title-wrapper'><h1 className='title'>Full Stack Developer</h1></div>,
            amount: 0.46,
            expanded: false,
	        },
	        {
            image: mountainBase,
            amount: 0.40,
            expanded: false,
	        },
	        {
            image: forest3,
            amount: 0.36,
            expanded: false,
	        },
	        {
            image: forest2,
            amount: 0.30,
            expanded: false,
	        },
	        {
            image: forest1,
            amount: 0.20,
            expanded: false,
	        },
	        {
            image: landscapeLeft,
            amount: 0.10,
            expanded: false,
	        },
	        {
            image: landscapeRight,
            amount: 0.00,
            expanded: false,
	        },
		    ]}
		    style={{
	        height: '100vh',
		    }}
			>
			</ParallaxBanner>
    </div>
  );
}

export default Banner;