import './App.css';
import { useRef } from 'react';
import General from './components/General';
import Objective from './components/Objective';
import Skills from './components/Skills';
import ProSkills from './components/ProSkills';
import WorkHistory from './components/WorkHistory';
import EduQuals from './components/EduQuals';
import Languages from './components/Languages';
import SubmitAll from './components/SubmitAll';
import EditAll from './components/EditAll';

function App() {
  const generalRef = useRef();
  const objectiveRef = useRef();
  const skillsRef = useRef();
  const proSkillsRef = useRef();
  const workHistoryRef = useRef();
  const eduQualsRef = useRef();
  const languagesRef = useRef();

  const allRefs = [
    generalRef,
    objectiveRef,
    skillsRef,
    proSkillsRef,
    workHistoryRef,
    eduQualsRef,
    languagesRef,
  ];

  return (
    <div id="app">
      <General ref={generalRef} />
      <Objective ref={objectiveRef} />
      <Skills ref={skillsRef} />
      <ProSkills ref={proSkillsRef} />
      <WorkHistory ref={workHistoryRef} />
      <EduQuals ref={eduQualsRef} />
      <Languages ref={languagesRef} />
      <div id="action-buttons">
        <SubmitAll sections={allRefs} />
        <EditAll sections={allRefs} />
      </div>
    </div>
  );
}

export default App;
