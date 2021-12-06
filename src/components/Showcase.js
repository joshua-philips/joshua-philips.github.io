import profile_pic from '../resources/img/profile_pic.jpg';
import behanceLogo from '../resources/icons/behance.svg';

const Showcase = () => {
  return (
    <div>
      <section
        className="bg-black bg-opacity-50 text-light p-5 text-center text-sm-start"
        id="showcase"
      >
        <div className="container">
          <div className="card bg-transparent">
            <div className="d-sm-flex align-items-center justify-content-evenly">
              <div>
                <h1>
                  Joshua <span className="text-warning">Senyi-Philips</span>
                </h1>
                <p className="lead text-white my-3">
                  Mobile Developer, UI/UX Design, Java <br />
                  Film Enthusiast, Music, Books
                </p>
                <div>
                  <a
                    href="https://github.com/joshua-philips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle m-2 ms-0"
                  >
                    <i className="bi-github h3 showcase-icon-bi"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joshua-senyi-philips/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle m-2"
                  >
                    <i className="bi-linkedin h3 showcase-icon-bi"></i>
                  </a>
                  <a
                    href="https://twitter.com/JphilipsGh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle m-2"
                  >
                    <i className="bi-twitter h3 showcase-icon-bi"></i>
                  </a>
                  <a
                    href="https://facebook.com/philipsjoshua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle m-2"
                  >
                    <i className="bi-facebook h3 showcase-icon-bi"></i>
                  </a>

                  <a
                    href="https://www.behance.net/joshuaphilips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle m-2"
                  >
                    <div className="prev-open">
                      <img
                        src={behanceLogo}
                        style={{ height: '35px', width: '25px' }}
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="https://letterboxd.com/Joshua_Philips/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-circle m-2"
                  >
                    <div className="prev-open">
                      <img
                        src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb.svg"
                        style={{ height: '35px', width: '25px' }}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="prev-open">
                <img
                  src={profile_pic}
                  alt=""
                  className="img-fluid d-sm-block border mt-4 mt-md-0 my-5"
                  id="profile-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
