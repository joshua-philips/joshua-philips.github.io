import { Link } from 'react-router-dom';
import behanceLogo from '../resources/icons/behance.svg';

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-dark bg-opacity-50 text-start">
      <div className="prev-open">
        <img src={project.thumbnail} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.preview}</p>
        <div className="d-flex align-items-center justify-content-between">
          <Link to={'/projects/' + project.id} className="btn btn-warning">
            Read More
          </Link>
          <div>
            {project.links.behance && (
              <a
                href={project.links.behance}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="prev-open">
                  <img
                    src={behanceLogo}
                    className="mx-2 h3"
                    style={{ height: '35px', width: '25px' }}
                    alt=""
                  />
                </div>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <i className="bi-github link-light h3"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
