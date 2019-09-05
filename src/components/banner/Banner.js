import React from 'react';
import {throttle} from 'lodash';

import mountain from '../../assets/images/mountain/mountain.jpg';
import landscapeRight from '../../assets/images/mountain/landscape-right.png';
import landscapeLeft from '../../assets/images/mountain/landscape-left.png';
import forest1 from '../../assets/images/mountain/forest-1.png';
import forest2 from '../../assets/images/mountain/forest-2.png';
import forest3 from '../../assets/images/mountain/forest-3.png';
import mountainBase from '../../assets/images/mountain/mountain-base.png';
import mountainMid from '../../assets/images/mountain/mountain-mid.png';
import mountainPeak from '../../assets/images/mountain/mountain-peak.png';

class Banner extends React.Component {

	parallax = () => {
		let parent = document.getElementById('parallax-container');
		let children = parent.getElementsByTagName('div');

		children[0].style.transform = 'translateY(-' + (window.pageYOffset * 0 / children.length) + 'px)';
		children[1].style.transform = 'translateY(-' + (window.pageYOffset * .2 / children.length) + 'px)';
		children[2].style.transform = 'translateY(-' + (window.pageYOffset * 0.4 / children.length) + 'px)';
		children[3].style.transform = 'translateY(-' + (window.pageYOffset * 0.6 / children.length) + 'px)';
		children[4].style.transform = 'translateY(-' + (window.pageYOffset * 2 / children.length) + 'px)';
		children[5].style.transform = 'translateY(-' + (window.pageYOffset * 3 / children.length) + 'px)';
		children[6].style.transform = 'translateY(-' + (window.pageYOffset * 5 / children.length) + 'px)';
		children[7].style.transform = 'translateY(-' + (window.pageYOffset * 8 / children.length) + 'px)';
		children[8].style.transform = 'translateY(-' + (window.pageYOffset * 8.6 / children.length) + 'px)';
		children[9].style.transform = 'translateY(-' + (window.pageYOffset * 12 / children.length) + 'px)';
		children[10].style.transform = 'translateY(-' + (window.pageYOffset * 12 / children.length) + 'px)';
	}

	throttle = (fn, wait) => {
	  var time = Date.now();
	  return function() {
	    if ((time + wait - Date.now()) < 0) {
	      fn();
	      time = Date.now();
	    }
	  }
	}

	componentDidMount() {
		window.addEventListener('scroll', throttle(this.parallax, .8), false)
	}

	render() {
	  return (
	    <div className="banner">
		    {/*<ParallaxBanner
		    			    className="your-class"
		    			    layers={[
		    			    	{
		    			    		children: <img src={mountain} onLoad={this.handleLoad} alt='Mountain banner image.' />,
		    	            amount: 1,
		    	            expanded: false,
		    			    	},
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
		    	            image: mountainMid,
		    	            amount: 0.46,
		    	            expanded: false,
		    		        },
		    		        // {
		    	         //    children: <div className='title-wrapper'><h1 className='title'>Full Stack Developer</h1></div>,
		    	         //    amount: 0.47,
		    	         //    expanded: false,
		    		        // },
		    		        {
		    	            image: mountainBase,
		    	            amount: 0.44,
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
		    	            amount: 0.05,
		    	            expanded: false,
		    		        },
		    		        {
		    	            image: landscapeRight,
		    	            amount: 0.00,
		    	            expanded: false,
		    		        },
		    		        {
		    	            children: <div className='top-wrapper'>
		    	            	<h1 className='name'>Krisli Dimo</h1>
		    	            	<div className='nav'>
		    	            		<button className='nav-link portfolio-link'>
		    	            			Portfolio
		    	            		</button>
		    	            	</div>
		    	            </div>,
		    	            amount: 0,
		    	            expanded: false,
		    		        },
		    			    ]}
		    			    style={{
		    		        height: '100vh',
		    			    }}
		    				>
		    				</ParallaxBanner>*/}
		    <div id="parallax-container">
					<div className="layer z-index-10" ><img src={mountain} /></div>
					<div className="layer z-index-9" ><img src={mountainPeak} /></div>
					<div className="layer z-index-8" ><img src={mountainMid} /></div>
					<div className="layer z-index-7" ><img src={mountainBase} /></div>
					<div className="layer z-index-6" ><img src={forest3} /></div>
					<div className="layer z-index-5" ><img src={forest2} /></div>
					<div className="layer z-index-4" ><img src={forest1} /></div>
					<div className="layer z-index-3" ><img src={landscapeLeft} /></div>
					<div className="layer z-index-2" ><img src={landscapeRight} /></div>

					<div className='top-wrapper'>
			    	<h1 className='name'>Krisli Dimo</h1>
			    	<div className='nav'>
			    		<button className='nav-link portfolio-link'>
			    			Portfolio
			    		</button>
			    	</div>
			    </div>

					<div className='title-wrapper layer z-index-8'><h1 className='title'>Full Stack Developer</h1></div>

				</div>
	    </div>
	  );
	}
}

export default Banner;