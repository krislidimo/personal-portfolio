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
		let offSets = [
			0,    // mountain
			0.1,  // mountainPeak
			0.2,  // mountainMid
			0.3,  // mountainBase
			1,    // forest3
			2,    // forest2
			4,    // forest1
			6,    // landscapeLeft
			6.6 , // landscapeRight
			12,   // top-wrapper
			.1    // title
		]

		for(let i = 0; i < children.length; i++) {
    	children[i].style.transform = 'translateY(-' + (window.pageYOffset * offSets[i] / children.length) + 'px)';
    }
	}

	componentDidMount() {
		window.addEventListener('scroll', throttle(this.parallax, .01), false)
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
		    	<div className='nav'>
		    		<h1 className='name'>Krisli Dimo</h1>
		    		<button className='nav-link portfolio-link'>
		    			Portfolio
		    		</button>
			    </div>

			  	{/*Title*/}
					<div className='title-wrapper layer z-index-8'>
						<h1 className='title'><span>Full</span> <span>Stack</span> <span>Developer</span></h1>
					</div>
				</div>
	    </div>
	  );
	}
}

export default Banner;