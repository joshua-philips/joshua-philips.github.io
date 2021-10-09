import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div>
      <section className="bg-black bg-opacity-50 text-light pt-5 content">
        <div className="container">
          <div className="card bg-black p-5 bg-opacity-75">
            <div className="card-title">
              <h1 className="text-warning mb-3">Projects</h1>
            </div>
            {projects.map((project) => (
              <div className="mb-5" key={project.id}>
                <ProjectCard project={project}></ProjectCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
