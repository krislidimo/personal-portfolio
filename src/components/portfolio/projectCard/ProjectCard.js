import React from 'react';
import Tilty  from 'react-tilty';

function ProjectCard() {
  return (
  	<Tilty
  		className="tilty"
  		settings={{
  			glare: true,
  			scale: 1.08,
  			"max-glare": 0.5
  		}}
  	>
    	<div className="project-card">
    			<h2 className="inner">Hello, World</h2>
   	 	</div>
   	</Tilty>
  );
}

export default ProjectCard;
