import About from '../components/About';
import Contact from '../components/Contact';
import ProjectsPreview from '../components/ProjectsPreview';
import Showcase from '../components/Showcase';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
      <Showcase></Showcase>
      <About></About>
      <Skills></Skills>
      <ProjectsPreview></ProjectsPreview>
      <Contact></Contact>
    </div>
  );
};

export default Home;
