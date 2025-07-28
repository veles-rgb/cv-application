import { useState } from 'react';
import '../styles/Languages.css';

function Languages() {
  const [editMode, setEditMode] = useState(true);
  const [languagesList, setLanguagesList] = useState([
    { language: 'English', rating: 5 },
  ]);

  const handleEditMode = () => {
    setEditMode(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  const handleUpdate = (e, index, item) => {
    const updatedList = [...languagesList];
    updatedList[index][item] = e.target.value;
    setLanguagesList(updatedList);
  };
  const handleAdd = () => {
    setLanguagesList([...languagesList, { language: '', rating: 1 }]);
  };
  const handleDelete = (e, index) => {
    const updatedList = languagesList.filter((_, i) => i !== index);
    setLanguagesList(updatedList);
  };

  const SkillBar = ({ level, max = 5 }) => {
    return (
      <div className="skill-bar-container">
        {Array.from({ length: max }, (_, i) => (
          <div
            key={i}
            className={`skill-bar-segment ${i < level ? 'filled' : ''}`}
          ></div>
        ))}
      </div>
    );
  };

  const SkillDesc = ({ level }) => {
    let desc;
    switch (parseInt(level)) {
      case 1:
        desc = 'Elementary proficiency';
        break;
      case 2:
        desc = 'Limited working proficiency';
        break;
      case 3:
        desc = 'Professional working proficiency';
        break;
      case 4:
        desc = 'Full professional proficiency';
        break;
      case 5:
        desc = 'Native or bilingual proficiency';
        break;
    }

    return <div className="language-skill-desc">{desc}</div>;
  };

  return (
    <div id="languages-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Languages</h1>
          {languagesList.map((language, index) => (
            <label key={index}>
              <span>Language:</span>
              <input
                type="text"
                onChange={(e) => handleUpdate(e, index, 'language')}
                value={language.language}
              />
              <span>Proficiency Level:</span>
              <select
                onChange={(e) => handleUpdate(e, index, 'rating')}
                value={language.rating}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button
                className="del-btn"
                type="button"
                onClick={(e) => handleDelete(e, index)}
              >
                Delete
              </button>
            </label>
          ))}
          <button className="add-btn" type="button" onClick={handleAdd}>
            Add Language
          </button>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <h2>Languages</h2>
          {languagesList.map((language, index) => (
            <div key={index} className="language-item">
              <h3>{language.language}</h3>
              <SkillBar level={parseInt(language.rating)} />
              <SkillDesc level={parseInt(language.rating)} />
            </div>
          ))}
          <button className="edit-btn" type="button" onClick={handleEditMode}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Languages;
