import { useState } from 'react';
import '../styles/ProSkills.css';

function ProSkills() {
  const [editMode, setEditMode] = useState(true);
  const [proSkillsList, setProSkillsList] = useState([
    {
      title: 'Multiline Phone Handling',
      items: [
        'Effectively managed a high-volume phone system, handling an average of 100 daily calls with a 95% call resolution rate.',
        'Demonstrated strong verbal communication skills, resulting in a 20% reduction in misdirected calls and improved client satisfaction.',
        'Implemented a call logging system, reducing response time by 15% and enhancing office communication flow.',
      ],
    },
    {
      title: 'Multitasking and Time Management',
      items: [
        'Successfully handled reception duties while managing administrative tasks, resulting in a 25% increase in overall office efficiency.',
        'Coordinated and scheduled appointments for a team of 10, optimizing the daily calendar and reducing scheduling conflicts by 20%.',
        'Managed a comprehensive filing system, achieving a 98% accuracy rate and minimizing document retrieval time by 15%.',
      ],
    },
    {
      title: 'Customer Service',
      items: [
        'Provided exceptional customer service, maintaining a customer satisfaction rate of 90% through effective issue resolution and a friendly demeanor.',
        'Implemented a feedback system, leading to a 10% increase in positive client feedback and an improved overall office atmosphere.',
        'Resolved client inquiries promptly, achieving a 30% reduction in issue resolution time and enhancing the client experience.',
      ],
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  function handleEdit() {
    setEditMode(true);
  }

  const handleAddSkill = () => {
    setProSkillsList([...proSkillsList, { title: '', items: [''] }]);
  };

  const handleAddSkillItem = (e, index) => {
    const newSkills = [...proSkillsList];
    const skill = { ...newSkills[index] };
    skill.items = [...skill.items, ''];
    newSkills[index] = skill;
    setProSkillsList(newSkills);
  };

  const handleSkillDelete = (e, index) => {
    const updatedSkills = proSkillsList.filter((_, i) => i !== index);
    setProSkillsList(updatedSkills);
  };

  const handleSkillItemDelete = (e, skillIndex, itemIndex) => {
    const updatedSkills = [...proSkillsList];
    const skill = { ...updatedSkills[skillIndex] };
    skill.items = skill.items.filter((_, i) => i !== itemIndex);
    updatedSkills[skillIndex] = skill;
    setProSkillsList(updatedSkills);
  };

  const handleUpdateSkill = (e, index) => {
    const updatedSkills = [...proSkillsList];
    updatedSkills[index].title = e.target.value;
    setProSkillsList(updatedSkills);
  };

  const handleUpdatedSkillItem = (e, skillIndex, itemIndex) => {
    const updatedSkills = [...proSkillsList];
    updatedSkills[skillIndex].items[itemIndex] = e.target.value;
    setProSkillsList(updatedSkills);
  };

  return (
    <div id="pro-skills-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Professional Skills</h1>
          {proSkillsList.map((skill, index) => (
            <label key={index}>
              <span>Skill</span>
              <input
                onChange={(e) => handleUpdateSkill(e, index)}
                type="text"
                value={skill.title}
              />
              <button
                type="button"
                onClick={(e) => handleSkillDelete(e, index)}
              >
                Delete
              </button>
              <ul>
                {skill.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span>Info</span>
                    <input
                      onChange={(e) =>
                        handleUpdatedSkillItem(e, index, itemIndex)
                      }
                      type="text"
                      value={item}
                    />
                    <button
                      onClick={(e) =>
                        handleSkillItemDelete(e, index, itemIndex)
                      }
                      type="button"
                    >
                      Delete
                    </button>
                  </li>
                ))}
                <button
                  type="button"
                  onClick={(e) => handleAddSkillItem(e, index)}
                >
                  Add item
                </button>
              </ul>
            </label>
          ))}
          <button onClick={handleAddSkill} type="button">
            Add Skill
          </button>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <h2>Professional Skills</h2>
          {proSkillsList.map((skill) => (
            <ul>
              <h3>{skill.title}</h3>
              {skill.items?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default ProSkills;
