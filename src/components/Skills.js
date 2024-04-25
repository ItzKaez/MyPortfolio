import meter1 from "../assets/img/90.png";
import meter2 from "../assets/img/80.png";
import meter3 from "../assets/img/70.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import headerImg from "../assets/img/daniel.png";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/banner5.jpg"
import TrackVisibility from 'react-on-screen';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Explore my technical skills and discover my expertise in various areas of computer science. From programming to development tools to project management, I'm equipped to tackle the challenges of the digital world.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Programming: Python, JavaScript, Java, Ocaml, C</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development: HTML, CSS, JavaScript, React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Database: SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Development Tools: Git, Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Project Management: Scrum</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
