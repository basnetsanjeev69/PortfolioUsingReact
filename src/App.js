import "./App.css";
import React from "react";
import "./style.scss";
import { images } from "./Assets/Images/index";
import projectImg from "./Assets/Images/user.png";
import profileImg from "./Assets/Images/Profile.png";

function App() {
  return (
    <div className="wrapper">
      {/* <!-- Top Nav --> */}
      <header className="primary-header" id="home">
        <div className="left">
          <div>
            <h1>Sanjeev</h1>
          </div>
          <div className="line"></div>
          <div>
            <h1>Software</h1>
            <h1>Engineer</h1>
          </div>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="navigation">
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      {/* <!-- Hero --> */}
      <section className="section1" id="hero">
        <div className="hero">
          <div className="left">
            <div className="name">Hi, I am sanjeev Basnet</div>
            <div className="tag">Software Engineer</div>
            <div className="sub-tag">I love coding and teaching</div>
            <button onclick="window.print()">
              Download CV
              <i className="fa-solid fa-download"></i>
            </button>
          </div>
          <div className="right">
            <img src={projectImg} alt="User" />
          </div>
        </div>
      </section>
      {/* <!-- Banner --> */}
      <section className="section2">
        <div className="info-container">
          <div className="info-lists">
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h5>IT</h5>
                <p>Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Skills --> */}
      <section className="section3" id="skill">
        <div className="skills">
          <div className="skill-content">
            <div className="skill-icon">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="skill-text">
              <h4>Html</h4>
            </div>
          </div>
          <div className="skill-content">
            <div className="skill-icon">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="text">
              <h4>Html</h4>
            </div>
          </div>
          <div className="skill-content">
            <div className="skill-icon">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="text">
              <h4>Html</h4>
            </div>
          </div>
          <div className="skill-content">
            <div className="skill-icon">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="text">
              <h4>Html</h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- RecentWork --> */}

      <section className="section4" id="work">
        <div className="work-header">
          <h3>My Recent Works</h3>
        </div>

        <div className="work-container">
          <div className="works">
            <div className="work-content">
              <div className="image">
                <img src={profileImg} alt="Work" width="100%" />
              </div>
              <div className="work-footer">
                <div className="icon-image">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="work-text">
                  <h3>Portfolio with React OCT 2023</h3>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="image">
                <img src={profileImg} alt="Work" width="100%" />
              </div>
              <div className="work-footer">
                <div className="icon-image">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="work-text">
                  <h3>Portfolio with React OCT 2023</h3>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="image">
                <img src={profileImg} alt="Work" width="100%" />
              </div>
              <div className="work-footer">
                <div className="icon-image">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="work-text">
                  <h3>Portfolio with React OCT 2023</h3>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="image">
                <img src={profileImg} alt="Work" width="100%" />
              </div>
              <div className="work-footer">
                <div className="icon-image">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="work-text">
                  <h3>Portfolio with React OCT 2023</h3>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="image">
                <img src={profileImg} alt="Work" width="100%" />
              </div>
              <div className="work-footer">
                <div className="icon-image">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="work-text">
                  <h3>Portfolio with React OCT 2023</h3>
                </div>
              </div>
            </div>
            <div className="work-content">
              <div className="image">
                <img src={profileImg} alt="Work" width="100%" />
              </div>
              <div className="work-footer">
                <div className="icon-image">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="work-text">
                  <h3>Portfolio with React OCT 2023</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About me --> */}
      <section className="section5" id="about">
        <div className="about-container">
          <div className="image-container">
            <div className="header">
              <h3>About Me</h3>
            </div>
            <div className="image">
              <img src={projectImg} alt="User" width="100%" />
            </div>
          </div>
          <div className="detail-container">
            <div className="introduction">
              <div className="introduction-title">
                <h3>Sanjeev Basnet</h3>
              </div>
              <div className="introduction-detail">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing. Porro
                  officia pariatur quibusdam, repudiandae eligendi et?
                  Distinctio sit quisquam nihil illum enim soluta? Magnam
                  doloremque hic ducimus! Amet, libero sit. Obcaecati debitis
                  labore quisquam odit ea consequatur?
                </p>
              </div>
            </div>
            <div className="interests">
              <div className="interest-title">
                <h3>Interests</h3>
              </div>
              <div className="interest-detail">
                <ul>
                  <li>Coding</li>
                  <li>Cricket</li>
                  <li>Movies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- GetInTouch --> */}

      <section className="section6" id="contact">
        <div className="touch-container">
          <div className="touch-title">
            <h3>Get in Touch</h3>
          </div>
          <div className="touch-icon">
            <i className="fa-brands fa-linkedin-in icon1"></i>
            <i className="fa-brands fa-github icon2"></i>
            <i className="fa-brands fa-facebook icon3"></i>
            <i className="fa-brands fa-twitter icon4"></i>
          </div>
          <div className="or">
            <h3>OR</h3>
          </div>
          <div className="touch-base">
            <a href="mailto:sanjeev@gmail.com">
              <div className="email">
                <p>sanjeev@gmail.com</p>
              </div>
            </a>

            <div className="email-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  Footer--> */}
      <footer className="section7">
        <div className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <div className="links">
                <div className="links-title">
                  <h3>Links</h3>
                </div>
                <div className="links-list">
                  <ul>
                    <li>
                      <a href="#skill">Skills</a>
                    </li>
                    <li>
                      <a href="#work">Projects</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-links">
                <div className="social-links-title">
                  <h3>Social Links</h3>
                </div>
                <div className="social-links-list">
                  <ul>
                    <li>Linkedin</li>
                    <li>Facebook</li>
                    <li>Github</li>
                    <li>X</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-arrow">
              <a href="#hero">
                <div className="arrow">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
              </a>
            </div>
            <div className="footer-copy">
              <p>&copy: Copy right all reserved. Made by me</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
