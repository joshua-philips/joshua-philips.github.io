import { Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsPreview = () => {
  return (
    <section className="bg-black bg-opacity-50 text-light pt-5" id="projects">
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title">
            <h3 className="mb-3 pb-3">
              <span className="border-bottom border-warning pb-2 section-header">
                PROJECTS
              </span>
            </h3>
          </div>
          <div className="row row-cols-md-2 g-4 text-center">
            <div className="col-md">
              <ProjectCard project={projects.readLog}></ProjectCard>
            </div>
            <div className="col-md">
              <ProjectCard project={projects.yaresa}></ProjectCard>
            </div>
            <div className="col-md">
              <ProjectCard project={projects.chini}></ProjectCard>
            </div>
          </div>
          <div className="card-footer mt-5">
            <Link to="/projects" className="no-underline h4 link-warning">
              See More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
