import './App.css';
import General from './components/General';
import Objective from './components/Objective';
import Skills from './components/Skills';
import ProSkills from './components/ProSkills';
import WorkHistory from './components/WorkHistory';

function App() {
  return (
    <div id="app">
      <General />
      <Objective />
      <Skills />
      <ProSkills />
      <WorkHistory />
    </div>
  );
}

export default App;
