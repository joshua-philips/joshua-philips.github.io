import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsPreview from '../components/ProjectsPreview';
import Showcase from '../components/Showcase';

const Home = () => {
  return (
    <div>
      <Showcase></Showcase>
      <About></About>
      <ProjectsPreview></ProjectsPreview>
      <Contact></Contact>
    </div>
  );
};

export default Home;
