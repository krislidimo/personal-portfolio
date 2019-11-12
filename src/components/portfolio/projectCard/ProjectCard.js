import React from 'react';
import Tilty  from 'react-tilty';


class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    	<Tilty
    		className="tilty"
    		settings={{
    			glare: true,
    			scale: 1.04,
    			"max-glare": 0.5
    		}}
    	>
      	<div className="project-card" style={{backgroundImage: `url("${this.props.project.src}")`}}>
          <h3 className="project-number">{this.props.project.id}</h3>
     	 	</div>
     	</Tilty>
    );
  }
}

export default ProjectCard;
