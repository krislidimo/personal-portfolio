import React from 'react';
import Slider from "react-slick";

import ProjectCard from '../projectCard/ProjectCard.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img0 from "../../../assets/images/It's_Over_9000.PNG";
import img1 from "../../../assets/images/nifty-markets.png";
import img2 from "../../../assets/images/mympy.png";
import img4 from "../../../assets/images/treasure-hunter.png";
import reduxlogo from "../../../assets/images/icons/reduxIcon.png";
import postgreslogo from "../../../assets/images/icons/postgresql.png";
import gsaplogo from "../../../assets/images/icons/gsap.png";
import springlogo from "../../../assets/images/icons/spring3.png";

const htmlIcon = <i class="fab fa-html5 fa-5x"></i>;
const cssIcon = <i class="fab fa-css3 fa-5x"></i>;
const jsIcon = <i class="fab fa-js-square fa-5x"></i>;
const reactIcon = <i class="fab fa-react fa-5x"></i>
const nodeIcon = <i class="fab fa-node fa-5x"></i>;
const javaIcon = <i class="fab fa-java fa-5x"></i>;
const pythonIcon = <i class="fab fa-python fa-5x"></i>;
const reduxIcon = <img class="fab img-icon redux-logo" src={reduxlogo} alt='redux logo'/>;
const postgresIcon = <img class="fab img-icon redux-logo" src={postgreslogo} alt='postgres logo'/>;
const gsapIcon = <img class="fab img-icon redux-logo" src={gsaplogo} alt='gsap logo'/>;
const springIcon = <img class="fab img-icon redux-logo" src={springlogo} alt='spring logo'/>;

class PortfolioCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSlide: {
        'title': "Nifty Market",
        'src': img1,
        'id': '01',
        'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,reduxIcon]
      },
      projects: [
        {
          'title': "It's Over 9000",
          'src': img0,
          'id': '00',
          'stack': [htmlIcon,cssIcon,jsIcon,gsapIcon]
        },
        {
          'title': "Nifty Market",
          'src': img1,
          'id': '01',
          'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,reduxIcon]
        },
        {
          'title': "Mympy",
          'src': img2,
          'id': '02',
          'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,nodeIcon]
        },
        {
          'title': "Macro Calculator",
          'src': "",
          'id': '03',
          'stack': [javaIcon,postgresIcon,springIcon]
        },
        {
          'title': "Treasure Hunter",
          'src': img4,
          'id': '04',
          'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,pythonIcon]
        }
      ]
    }
  }

  componentDidMount() {
    var arrows = document.querySelectorAll('.slick-arrow')
    var dots = document.querySelector('.slick-dots')
    var slides = document.querySelectorAll('.slick-slide')
    arrows.forEach((btn) => {
      btn.addEventListener('click', this.updateCurrentProject)
    })
    for (var i = 0; i < dots.children.length; i++) {
      dots.children[i].addEventListener('click', this.updateCurrentProject)
    }
    slides.forEach((slide) => {
      slide.addEventListener('mouseup', this.updateCurrentProject)
    })
    this.updateCurrentProject()
  }

  updateCurrentProject = () => {
    setTimeout(() => {
      var activeSlides = document.querySelectorAll('.slick-active')
      var id = parseInt(activeSlides[parseInt(activeSlides.length/2)-1].innerText.slice(-2))
      this.setState({
        ...this.state,
        currentSlide: this.state.projects[id]
      })
    },300)
  }
  
  render () {
    const settings = {
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      dots: true,
      speed: 500,
    };

    return (
      <div className="portfolio-carousel">
        <h2 className="title">{this.state.currentSlide.id + " | " +this.state.currentSlide.title}</h2>

        <Slider {...settings}>
          {this.state.projects.map(project => {
            return <div key={project.id}>
              <ProjectCard project={project}/>
            </div>
          })}
        </Slider>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        <div className="tech-stack">
          {this.state.currentSlide.stack.map((stackIcon) => (
            stackIcon
          ))}
        </div>
      </div>
    );
  }
}

export default PortfolioCarousel;
