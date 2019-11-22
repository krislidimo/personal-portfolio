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

const htmlIcon = <i className="fab fa-html5 fa-5x"></i>;
const cssIcon = <i className="fab fa-css3 fa-5x"></i>;
const jsIcon = <i className="fab fa-js-square fa-5x"></i>;
const reactIcon = <i className="fab fa-react fa-5x"></i>;
const nodeIcon = <i className="fab fa-node fa-5x"></i>;
const javaIcon = <i className="fab fa-java fa-5x"></i>;
const pythonIcon = <i className="fab fa-python fa-5x"></i>;
const reduxIcon = <img className="fab img-icon redux-logo" src={reduxlogo} alt='redux logo'/>;
const postgresIcon = <img className="fab img-icon redux-logo" src={postgreslogo} alt='postgres logo'/>;
const gsapIcon = <img className="fab img-icon redux-logo" src={gsaplogo} alt='gsap logo'/>;
const springIcon = <img className="fab img-icon redux-logo" src={springlogo} alt='spring logo'/>;

class PortfolioCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth,
      currentSlide: {
        'title': "Nifty Market",
        'description': 'Nifty Market was built in a 4 day hackathon style event with myself and one other developer. My role was to develop a front-end application that acted as a marketplace for virtual items. Despite there only being two of us, my partner and I managed to built a site complete with user accounts and a fully functioning market place.',
        'src': img1,
        'siteLink': "",
        'githubLink': "",
        'id': '01',
        'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,reduxIcon],
        'info': ''
      },
      projects: [
        {
          'title': "It's Over 9000",
          'description': 'My first attempt at web development was built in 4 days utilizing HTML, CSS, and JS. It was also my first time working with GSAP, a JS animation library. This site served as the marketing page for a chess player ranking application. The project was in collaboration with 8 other team members, including 3 data scientists, 2 back-end devs, and 1 front-end dev.',
          'src': img0,
          'siteLink': "https://it-is-over9000.github.io/ItsOver9000-UI/",
          'githubLink': "https://github.com/it-is-over9000/ItsOver9000-UI",
          'id': '00',
          'stack': [htmlIcon,cssIcon,jsIcon,gsapIcon],
          'info': ''
        },
        {
          'title': "Nifty Market",
          'description': 'Nifty Market was built in a 4 day hackathon style event with myself and one other developer. My role was to develop a front-end application that acted as a marketplace for virtual items. Despite there only being two of us, my partner and I managed to built a site complete with user accounts and a fully functioning market place.',
          'src': img1,
          'siteLink': "",
          'githubLink': "https://github.com/nifty-market/Nifty-Market-FE",
          'id': '01',
          'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,reduxIcon],
          'info': ''
        },
        {
          'title': "Mympy",
          'description': 'Mympy was an 8 week long co-op project in collaboration with SIXR, a VR educational non-profit. This project was designed as an Indigogo style donations platform specifically for under privileged dreamers who want to get involved with vr creation. My contribution included front-end development as well as integrating Stripe, Cloudinary, and Formidable Victory.',
          'src': img2,
          'siteLink': "https://mympydreamers.netlify.com/",
          'githubLink': "https://github.com/mympy-dreamers/Frontend",
          'id': '02',
          'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,nodeIcon],
          'info': ''
        },
        {
          'title': "Macro Calculator",
          'description': 'Macro Calculator was an IOS application that calculated macro nutrients for fitness enthusiasts. My main role was to build out the back-end that housed user information. This project was built using Spring and utilized Oauth for authentication.',
          'src': "",
          'siteLink': "",
          'githubLink': "https://github.com/build-week-macro-calculator",
          'id': '03',
          'stack': [javaIcon,springIcon,postgresIcon],
          'info': 'Back-End Project'
        },
        {
          'title': "Treasure Hunter",
          'description': 'For this project our team of 3 was given a set of computer science problems to solve. The three main problems where to traverse a given graph using depth first traversal, develop and use an 8bit cpu emulator to decode an encrypted message, and develop and use a proof of work mining algorithm to mine a virtual coin. My team and I completed all three task as well as created an interface for the project using React.',
          'src': img4,
          'siteLink': "",
          'githubLink': "https://github.com/CS21-Team12/treasure-hunt",
          'id': '04',
          'stack': [htmlIcon,cssIcon,jsIcon,reactIcon,pythonIcon],
          'info': ''
        }
      ]
    }
  }

  componentDidMount() {
    this.initListeners()
    this.updateCurrentProject()
    // on window resize, calls resize function
    window.onresize = this.resize;
  }

  // initializes listeners for when the user changes project
  // handles clicking arrows, dots, and dragging slides
  initListeners = () => {
    var arrows = document.querySelectorAll('.slick-arrow')
    var dots = document.querySelector('.slick-dots')
    var slides = document.querySelectorAll('.slick-slide')

    // clicking carousel arrows
    arrows.forEach((btn) => {
      btn.addEventListener('click', this.updateCurrentProject)
    })

    // clicking carousel dots
    for (var i = 0; i < dots.children.length; i++) {
      dots.children[i].addEventListener('click', this.updateCurrentProject)
    }

    // dragging slides
    slides.forEach((slide) => {
      slide.addEventListener('mouseup', this.updateCurrentProject)
    })
  }

  updateCurrentProject = () => {
    setTimeout(() => {
      var activeSlides = document.querySelectorAll('.slick-active')
      var centerSlide = activeSlides[parseInt(activeSlides.length/2)-1]
      var id = parseInt(centerSlide.querySelector('.project-number').innerText)
      this.setState({
        ...this.state,
        currentSlide: this.state.projects[id]
      })
    },300)
  }

  // updated width on resize.
  resize = () => {
    this.setState({
      ...this.state,
      width: window.innerWidth
    })
  }

  
  render () {
    var slides = 3 

    // if screen width is less than 500 adjust number of slides
    if (this.state.width <= 500) {
      slides = 1
    }

    const settings = {
      infinite: true,
      centerPadding: "60px",
      slidesToShow: slides ,
      dots: true,
      speed: 500,
    };

    return (
      <div className="portfolio-carousel">
        <h2 className="title">{this.state.currentSlide.title}</h2>

        <Slider {...settings}>
          {this.state.projects.map(project => {
            return <div key={parseInt(project.id)}>
              <ProjectCard project={project}/>
            </div>
          })}
        </Slider>

        <p className="description">
          {this.state.currentSlide.description}
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
