import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/projects/:id">
          <ProjectDetails></ProjectDetails>
        </Route>
      </Switch>
      <Contact></Contact>
    </Router>
  );
}

export default App;
