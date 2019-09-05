import React from 'react';
import { throttle } from 'lodash';

// Banner Images used as layers
import mountain from '../../assets/images/mountain/mountain.jpg';
import mountainPeak from '../../assets/images/mountain/mountain-peak.png';
import mountainMid from '../../assets/images/mountain/mountain-mid.png';
import mountainBase from '../../assets/images/mountain/mountain-base.png';
import forest3 from '../../assets/images/mountain/forest-3.png';
import forest2 from '../../assets/images/mountain/forest-2.png';
import forest1 from '../../assets/images/mountain/forest-1.png';
import landscapeLeft from '../../assets/images/mountain/landscape-left.png';
import landscapeRight from '../../assets/images/mountain/landscape-right.png';

class Banner extends React.Component {

	parallax = () => {
		let parent = document.getElementById('parallax-container');
		let children = parent.getElementsByTagName('div');

		// Set off-set of each layer as you scroll
		children[0].style.transform = 'translateY(-' + (window.pageYOffset * 0 / children.length) + 'px)';    // mountain
 		children[1].style.transform = 'translateY(-' + (window.pageYOffset * 0.2 / children.length) + 'px)';  // mountainPeak
 		children[2].style.transform = 'translateY(-' + (window.pageYOffset * 0.4 / children.length) + 'px)';  // mountainMid
 		children[3].style.transform = 'translateY(-' + (window.pageYOffset * 0.6 / children.length) + 'px)';  // mountainBase
 		children[4].style.transform = 'translateY(-' + (window.pageYOffset * 1 / children.length) + 'px)';    // forest3
 		children[5].style.transform = 'translateY(-' + (window.pageYOffset * 3 / children.length) + 'px)';    // forest2
 		children[6].style.transform = 'translateY(-' + (window.pageYOffset * 5 / children.length) + 'px)';    // forest1
 		children[7].style.transform = 'translateY(-' + (window.pageYOffset * 8 / children.length) + 'px)';    // landscapeLeft
 		children[8].style.transform = 'translateY(-' + (window.pageYOffset * 8.6 / children.length) + 'px)';  // landscapeRight
 
		children[9].style.transform = 'translateY(-' + (window.pageYOffset * 12 / children.length) + 'px)';   // top-wrapper
		children[10].style.transform = 'translateY(-' + (window.pageYOffset * 12 / children.length) + 'px)';  // title
	}

	componentDidMount() {
		window.addEventListener('scroll', throttle(this.parallax, .8), false)
	}

	render() {
	  return (
	    <div className="banner">
		    <div id="parallax-container">
		    	{/*Parallax Banner Layers*/}
					<div className="layer z-index-10" ><img src={mountain} alt='Mountain banner image.' /></div>
					<div className="layer z-index-9" ><img src={mountainPeak} alt='' /></div>
					<div className="layer z-index-8" ><img src={mountainMid} alt='' /></div>
					<div className="layer z-index-7" ><img src={mountainBase} /></div>
					<div className="layer z-index-6" ><img src={forest3} alt='' /></div>
					<div className="layer z-index-5" ><img src={forest2} alt='' /></div>
					<div className="layer z-index-4" ><img src={forest1} alt='' /></div>
					<div className="layer z-index-3" ><img src={landscapeLeft} alt='' /></div>
					<div className="layer z-index-2" ><img src={landscapeRight} alt='' /></div>

					{/*Name & Nav*/}
					<div className='top-wrapper'>
			    	<h1 className='name'>Krisli Dimo</h1>
			    	<div className='nav'>
			    		<button className='nav-link portfolio-link'>
			    			Portfolio
			    		</button>
			    	</div>
			    </div>

			  	{/*Title*/}
					<div className='title-wrapper layer z-index-8'><h1 className='title'>Full Stack Developer</h1></div>
				</div>
	    </div>
	  );
	}
}

export default Banner;