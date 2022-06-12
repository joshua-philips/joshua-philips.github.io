import aboutText from '../data/aboutText';
import profile_pic from '../resources/img/profile_pic.jpg';

const About = () => {
  return (
    <section className="bg-black bg-opacity-50 text-light py-5" id="about">
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title"></div>
          <div className="card-text">
            <div className="prev-open">
              <img
                src={profile_pic}
                alt=""
                className="img-fluid d-sm-block border mt-4 mt-md-0 my-5"
                id="profile-pic"
              />
            </div>
            <h3 className="mb-5 mb-md-0 pb-1 pb-md-5 text-md-center section-intro">
              Hey There! I'm Joshua.
              <br />A software developer who
              <br />
              loves design
            </h3>

            <div>
              <div className="about-text">
                <p>{aboutText[0]}</p>
                {/* <p className="d-none d-md-block">{aboutText[1]}</p> */}
                <p>{aboutText[2]}</p>
                <p className="d-none d-md-block">{aboutText[3]}</p>
              </div>
              <hr />
              <div className="">
                <ul className="list-group list-group-flush list-unstyled">
                  <li className="list-group-item bg-black bg-transparent text-light">
                    <i className="bi-chevron-right"></i>
                    <span className="fw-bold">Email: </span>
                    philipsjoshua96@gmail.com
                  </li>
                  {/* <li className="list-group-item bg-black bg-transparent text-light">
                    <i className="bi-chevron-right"></i>
                    <span className="fw-bold">Phone: </span>+233 559059563
                  </li> */}
                  <li className="list-group-item bg-black bg-transparent text-light">
                    <i className="bi-chevron-right"></i>
                    <span className="fw-bold">Location: </span>Accra, Ghana
                  </li>
                  {/* <li className="list-group-item bg-black bg-transparent text-light">
                    <i className="bi-chevron-right"></i>
                    <span className="fw-bold">Senior High School: </span>
                    <a
                      className="link-warning no-underline"
                      href="https://www.adisadelcollege.net/home.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adisadel College
                    </a>
                  </li> */}
                  {/* <li className="list-group-item bg-black bg-transparent text-light">
                    <i className="bi-chevron-right"></i>
                    <span className="fw-bold">University: </span>
                    <a
                      className="link-warning no-underline"
                      href="https://site.gctu.edu.gh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GCTU
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
