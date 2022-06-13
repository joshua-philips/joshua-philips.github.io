import { useParams } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  let project = projects.find((project) => project.id === id) ?? projects[0];
  return (
    <div>
      <section className="bg-black bg-opacity-50 pt-5 pb-5">
        <div className="content container">
          <div className="card bg-black p-5 bg-opacity-75">
            {project.title && (
              <h1 className="text-warning pb-3 px-2">{project.title}</h1>
            )}
            <div className="card-body text-light">
              {project.paragraphs &&
                project.paragraphs.map((paragraph) => (
                  <div className="pb-5" key={paragraph.title}>
                    <h5 className="card-title paragraph-title">{paragraph.title}</h5>
                    <p className="card-text about-text">{paragraph.text}</p>
                  </div>
                ))}
              <div className="">
                {(project.links.behance ||
                  project.links.github ||
                  project.links.live) && (
                  <h5 className="card-title">External Links</h5>
                )}
                {project.links.behance && (
                  <a
                    href={project.links.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                  >
                    <i className="fab fa-behance link-light h3"></i>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="me-3"
                  >
                    <i className="bi-github link-light h3"></i>
                  </a>
                )}
                <br />
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="me-3 btn btn-dark"
                  >
                    Live/Test Project
                  </a>
                )}
              </div>
            </div>
            {project.image && (
              <img
                src={project.image}
                alt="..."
                className="img-fluid project-details-img mt-2"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
