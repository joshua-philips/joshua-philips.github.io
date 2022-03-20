import { Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsPreview = () => {
  return (
    <section className="bg-black bg-opacity-50 text-light pt-5" id="projects">
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title">
            <h3 className="mb-3 pb-3 section-intro">Projects</h3>
          </div>
          <div className="row row-cols-md-2 g-4 text-center">
            <div className="col-md">
              <ProjectCard project={projects[0]}></ProjectCard>
            </div>
            <div className="col-md">
              <ProjectCard project={projects[1]}></ProjectCard>
            </div>
            <div className="col-md">
              <ProjectCard project={projects[2]}></ProjectCard>
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
