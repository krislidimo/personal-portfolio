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
          perspective: 3000,
          max: 18,
    			scale: 1.04,
    			"max-glare": 0.5
    		}}
    	>
      	<div className="project-card" style={{backgroundImage: `url("${this.props.project.src}")`}}>
          <h3 className="info">{this.props.project.info}</h3>
          <h4 className="project-number">{this.props.project.id}</h4>
          {!this.props.project.info && <button 
            className="visit-btn"
            onClick={() => window.open(this.props.project.siteLink, "_blank")}
          >Visit</button>}
          <i 
            class="fab fa-github-square"
            onClick={() => window.open(this.props.project.githubLink, "_blank")}
          ></i>
          <div className="shadow-container">
            <div className="shadow-effect"></div>
          </div>
     	 	</div>
     	</Tilty>
    );
  }
}

export default ProjectCard;
