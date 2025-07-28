import { useState, useImperativeHandle, forwardRef } from 'react';
import '../styles/Skills.css';

const Skills = forwardRef((props, ref) => {
  const [editMode, setEditMode] = useState(true);
  const [skillsList, setSkillsList] = useState([
    'Database management',
    'Computer literacy',
    'Scheduling appointments',
    'Microsoft Office Suite',
    'Multiline phone telephone system',
    'Adaptability',
    'Document filing',
    'Time management',
  ]);

  const handleSubmit = (e) => {
    if (e?.preventDefault) {
      e.preventDefault();
    }
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

  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
    edit: handleEdit,
  }));

  return (
    <div id="skills-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Skills</h1>
          {skillsList.map((skill, index) => (
            <label key={index}>
              <input
                onChange={(e) => handleSkillUpdate(e, index)}
                type="text"
                value={skill}
              ></input>
              <button
                className="del-btn"
                type="button"
                onClick={(e) => handleDeleteSkill(e, index)}
              >
                Delete
              </button>
            </label>
          ))}
          <button className="add-btn" type="button" onClick={handleAddSkill}>
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
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
});

export default Skills;
