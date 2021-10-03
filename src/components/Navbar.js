import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className="
        navbar navbar-expand-lg
        bg-black
        navbar-dark
        fixed-top
        py-3
        bg-opacity-75
      "
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#about" className="nav-link">
                  Bio
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#skills" className="nav-link">
                  Skills
                </HashLink>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link btn btn-warning text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="contactModalLabel">
                <span className="border-bottom border-warning pb-2">
                  CONTACT
                </span>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="form-modal">
                <div className="mb-3">
                  <label htmlFor="email-modal" className="col-form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-modal"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject-modal" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject-modal"
                    placeholder=""
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-modal" className="col-form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message-modal"
                    required
                  ></textarea>
                </div>
                <div className="modal-footer border-top-0">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-warning">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
