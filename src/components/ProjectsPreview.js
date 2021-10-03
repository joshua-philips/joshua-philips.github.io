import { Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsPreview = () => {
  return (
    <section class="bg-black bg-opacity-50 text-light pt-5" id="projects">
      <div class="container">
        <div class="card bg-black p-5 bg-opacity-75">
          <div class="card-title">
            <h3 class="mb-3 pb-3">
              <span class="border-bottom border-warning pb-2 section-header">
                PROJECTS
              </span>
            </h3>
          </div>
          <div class="row row-cols-md-2 g-4 text-center">
            <div class="col-md">
              <ProjectCard project={projects.readLog}></ProjectCard>
            </div>
            <div class="col-md">
              <ProjectCard project={projects.yaresa}></ProjectCard>
            </div>
            <div class="col-md">
              <ProjectCard project={projects.chini}></ProjectCard>
            </div>
          </div>
          <div class="card-footer mt-5">
            <Link to="/projects" class="no-underline h4 link-warning">
              See More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
