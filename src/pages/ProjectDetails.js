import { useParams } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="content">
      <h1 className="text-warning">{projects[id].title}</h1>
    </div>
  );
};

export default ProjectDetails;
