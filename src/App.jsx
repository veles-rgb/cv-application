import './App.css';
import General from './components/General';
import Objective from './components/Objective';
import Skills from './components/Skills';
import ProSkills from './components/ProSkills';
import WorkHistory from './components/WorkHistory';
import EduQuals from './components/EduQuals';

function App() {
  return (
    <div id="app">
      <General />
      <Objective />
      <Skills />
      <ProSkills />
      <WorkHistory />
      <EduQuals />
    </div>
  );
}

export default App;
