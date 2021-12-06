import aboutText from '../data/aboutText';

const About = () => {
  return (
    <section className="bg-black bg-opacity-50 text-light py-5" id="about">
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title">
            <h3 className="mb-3 mb-md-0 pb-3">
              <span className="border-bottom border-warning pb-2 section-header">
                ABOUT
              </span>
            </h3>
          </div>
          <div className="card-text">
            <div>
              <div>
                <p>{aboutText[0]}</p>
                <p className="d-none d-md-block">{aboutText[1]}</p>
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
