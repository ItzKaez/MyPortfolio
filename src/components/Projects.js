import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tetris.png";
import projImg2 from "../assets/img/tower.png";
import projImg3 from "../assets/img/sudoku.png";
import projImg4 from "../assets/img/cosmic.png";
import projImg5 from "../assets/img/img.png";
import projImg6 from "../assets/img/tiktok.png";
import projImg7 from "../assets/img/path.png";
import projImg8 from "../assets/img/site.png";





import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsA = [
    {
      title: "Tetris Game",
      description: "1st year of University, In OCaml",
      imgUrl: projImg1,
    },
    {
      title: "Tower Defense Game",
      description: "2nd year of University, In C",
      imgUrl: projImg2,
    },
    {
      title: "Sudoku Solver",
      description: "3rd year of University, In C",
      imgUrl: projImg3,
    },
    {
      title: "Cosmic Adventures",
      description: "3rd year of University, In Java",
      imgUrl: projImg4,
    },
    {
      title: "Image Processing",
      description: "2nd year of University, In C",
      imgUrl: projImg5,
    },
  ];

  const projectsP = [
    {
      title: "Task Automation",
      description: "TikTok video editing automation, in Python",
      imgUrl: projImg6,
    },
    {
      title: "Path Game",
      description: "My first mobile game, made with Godot Engine",
      imgUrl: projImg7,
    },
    {
      title: "Portfolio",
      description: "A Web Portfolio, made with React",
      imgUrl: projImg8,
    },
    
  ];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore some of the significant projects I've completed throughout my academic journey, personal endeavors, and internships. Each project represents an opportunity for me to apply my skills and delve into new areas of computer science.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Academic Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Internships Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsA.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsP.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Just a heads-up, I haven't had the chance to dive into any internships just yet. But, I'm gearing up to start one soon! So, at the moment, there aren't any projects in this section.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
