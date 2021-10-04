import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section className="bg-black bg-opacity-50 text-light pt-5 content">
      <div className="container">
        <div className="card bg-black p-5 bg-opacity-75">
          <div className="card-title">
            <h1 className="text-warning mb-3">Projects</h1>
          </div>
          <div className="mb-5">
            <ProjectCard project={projects.yaresa}></ProjectCard>
          </div>
          <div className="mb-5">
            <ProjectCard project={projects.readLog}></ProjectCard>
          </div>
          <div className="mb-5">
            <ProjectCard project={projects.cediBudget}></ProjectCard>
          </div>
          <div className="mb-5">
            <ProjectCard project={projects.chini}></ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
