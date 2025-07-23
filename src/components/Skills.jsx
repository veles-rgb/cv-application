import { useState } from 'react';
import '../styles/Skills.css';

function Skills() {
  const [editMode, setEditMode] = useState(true);
  const [skillsList, setSkillsList] = useState([
    'Skill 1',
    'Skill 2',
    'Skill 3',
    'Skill 4',
    'Skill 5',
    'SKill 6',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  function handleEdit() {
    setEditMode(true);
  }

  const handleAddSkill = () => {
    setSkillsList([...skillsList, '']);
  };

  const handleSkillUpdate = (e, index) => {
    const updatedSkills = [...skillsList];
    updatedSkills[index] = e.target.value;
    setSkillsList(updatedSkills);
  };

  const handleDeleteSkill = (e, index) => {
    const updatedSkills = skillsList.filter((_, i) => i !== index);
    setSkillsList(updatedSkills);
  };

  return (
    <div id="skills-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Skills</h1>
          {skillsList.map((skill, index) => (
            <label>
              <input
                onChange={(e) => handleSkillUpdate(e, index)}
                key={index}
                type="text"
                value={skill}
              ></input>
              <button
                type="button"
                onClick={(e) => handleDeleteSkill(e, index)}
              >
                Delete
              </button>
            </label>
          ))}
          <button type="button" onClick={handleAddSkill}>
            Add Skill
          </button>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <h2>Skills</h2>
          <ul>
            {skillsList.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Skills;
