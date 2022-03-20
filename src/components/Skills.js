import flutterLogo from '../resources/icons/flutter.svg';
import dartLogo from '../resources/icons/dart.png';
import firebaseLogo from '../resources/icons/firebase.png';
import html5 from '../resources/icons/html5.svg';
import css from '../resources/icons/css3.svg';
import javascript from '../resources/icons/javascript.svg';
import xd from '../resources/icons/adobe-xd.svg';
import photoshop from '../resources/icons/adobe-photoshop.svg';
import eclipse from '../resources/icons/eclipse.png';
import git from '../resources/icons/git.svg';
import mysql from '../resources/icons/mysql.svg';
import vscode from '../resources/icons/vscode.svg';
import java from '../resources/icons/java.svg';
import resume from '../resources/joshua-philips-resume.pdf';
import springboot from '../resources/icons/spring-boot.png';

const Skills = () => {
  return (
    <section className="bg-black bg-opacity-50 text-light py-5" id="skills">
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title">
            <h3 className="mb-5 mb-md-0 pb-1 pb-md-5 text-md-center section-intro">
              Skills &#38; tools
              <br />I use for my work
            </h3>
          </div>
          <div className="row row-cols-md-2">
            <div className="col-md card bg-warning bg-opacity-50 py-2 mb-3">
              <div className="card-title h4 mb-4">Mobile App Development</div>
              <div className="row row-cols-3 row-cols-md-5 ">
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={flutterLogo}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Flutter
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={dartLogo}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Dart
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={firebaseLogo}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Firebase
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md card bg-secondary bg-opacity-50 py-2 mb-3">
              <div className="card-title h4 mb-4">Web Design</div>
              <div className="row row-cols-3 row-cols-md-5 ">
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={html5}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    HTML
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={css}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    CSS
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={javascript}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    JavaScript
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <i className="fab fa-react text-primary skills-icon-fa figure-img img-fluid rounded skills-icon"></i>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    React
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <i className="fab fa-bootstrap skills-icon-fa figure-img img-fluid rounded skills-icon"></i>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Bootstrap
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md card bg-dark bg-opacity-50 py-2 mb-3">
              <div className="card-title h4 mb-4">
                UI/UX {'&'} Graphic Design
              </div>
              <div className="row row-cols-3 row-cols-md-5 ">
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={xd}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Adobe XD
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={photoshop}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Photoshop
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md card bg-danger bg-opacity-50 py-2 mb-3">
              <div className="card-title h4 mb-4">Backend Development</div>
              <div className="row row-cols-3 row-cols-md-5 ">
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={java}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Java
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={springboot}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Spring Boot
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-md card bg-success bg-opacity-50 py-2 mb-3">
              <div className="card-title h4 mb-4">Others</div>
              <div className="row row-cols-3 row-cols-md-5">
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={mysql}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    MySQL
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/c/cc/JavaFX_Logo.png"
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    JavaFX
                  </figcaption>
                </figure>
                {/* <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src="https://junit.org/junit5/assets/img/junit5-logo.png"
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    JUnit 5
                  </figcaption>
                </figure> */}
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={git}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Git
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg"
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Maven
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={eclipse}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    Eclipse
                  </figcaption>
                </figure>
                <figure className="figure col">
                  <div className="prev-open">
                    <img
                      src={vscode}
                      className="figure-img img-fluid rounded skills-icon"
                      alt="..."
                    ></img>
                  </div>
                  <figcaption className="figure-caption text-light d-none d-sm-block">
                    VSCode
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="card-footer mt-4 btn btn-dark" id="resume">
            <a
              className="text-light no-underline h6"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="text-center">
                <i className="bi-download mx-2"></i>Download Resume
              </h6>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
