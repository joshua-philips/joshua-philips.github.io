import behanceLogo from '../resources/icons/behance.svg';

const Showcase = () => {
  return (
    <div>
      <section
        className="container bg-black bg-opacity-50 text-light p-5 text-sm-start"
        id="showcase"
      >
        <div className="card bg-transparent border-0 showcase-info">
          <h1 className="showcase-name">
            Joshua <br />
            Senyi-Philips.
          </h1>
          <p className="lead text-white my-3 showcase-sub">
            Flutter Developer, UI/UX Design
            <br />
            Java Development
            <br />
            Film Enthusiast
          </p>
          <div className="d-sm-flex justify-content-end">
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
        </div>
        {/* <div className="container">
          
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
        </div> */}
      </section>
    </div>
  );
};

export default Showcase;
