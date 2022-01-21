import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-dark bg-opacity-50 text-start">
      {project.thumbnail && (
        <div className="prev-open">
          <img
            src={project.thumbnail}
            className="card-img-top project-card-img"
            alt="..."
          />
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        {project.preview && <p className="card-text">{project.preview}</p>}
        <div className="d-flex align-items-center justify-content-between">
          <Link to={'/projects/' + project.id} className="btn btn-warning">
            Read More
          </Link>
          <div className="ms-3 align-items-center justify-content-center">
            {project.links.behance && (
              <a
                href={project.links.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-behance link-light h3"></i>
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
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <i className="bi-globe link-light h3"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
