import { useState, useImperativeHandle, forwardRef } from 'react';
import '../styles/EduQuals.css';

const EduQuals = forwardRef((props, ref) => {
  const [editMode, setEditMode] = useState(true);
  const [eduQualsList, setEduQualsList] = useState([
    {
      degreeType: 'Bachelor of Science',
      degree: 'Management',
      date: '06/2021',
      school: 'University of Denver',
      location: 'Denver, CO',
      quals: [
        'Minor in Business Administration',
        'Microsoft Office Specialist (MOS) - (2023)',
        'Customer Service Professional (CSP) - (2022)',
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

  const handleUpdate = (e, index, qualsIndex, item, main = true) => {
    if (main === true) {
      const updatedList = [...eduQualsList];
      updatedList[index][item] = e.target.value;
      setEduQualsList(updatedList);
    } else {
      const updatedList = [...eduQualsList];
      updatedList[index].quals[qualsIndex] = e.target.value;
      setEduQualsList(updatedList);
    }
  };

  const handleAdd = (e, index, item) => {
    if (item === 'main') {
      setEduQualsList([
        ...eduQualsList,
        {
          degreeType: '',
          degree: '',
          date: '',
          school: '',
          location: '',
          quals: ['', '', ''],
        },
      ]);
    } else if (item === 'quals') {
      const newList = [...eduQualsList];
      const eduQual = newList[index];
      eduQual.quals = [...eduQual.quals, ''];
      newList[index] = eduQual;
      setEduQualsList(newList);
    }
  };

  const handleDelete = (e, index, qualsIndex, main = true) => {
    if (main === true) {
      const updatedList = eduQualsList.filter((_, i) => i !== index);
      setEduQualsList(updatedList);
    } else {
      const updatedList = [...eduQualsList];
      const eduQual = { ...updatedList[index] };
      eduQual.quals = eduQual.quals.filter((_, i) => i !== qualsIndex);
      updatedList[index] = eduQual;
      setEduQualsList(updatedList);
    }
  };

  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  return (
    <div id="edu-quals-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Education & Qualifications</h1>
          {eduQualsList.map((eduQual, index) => (
            <label key={index}>
              <span>Degree Type</span>
              <input
                type="text"
                onChange={(e) => handleUpdate(e, index, null, 'degreeType')}
                value={eduQual.degreeType}
              />
              <span>Degree</span>
              <input
                type="text"
                onChange={(e) => handleUpdate(e, index, null, 'degree')}
                value={eduQual.degree}
              />
              <span>Date</span>
              <input
                type="text"
                onChange={(e) => handleUpdate(e, index, null, 'date')}
                value={eduQual.date}
              />
              <span>School</span>
              <input
                type="text"
                onChange={(e) => handleUpdate(e, index, null, 'school')}
                value={eduQual.school}
              />
              <span>Location</span>
              <input
                type="text"
                onChange={(e) => handleUpdate(e, index, null, 'location')}
                value={eduQual.location}
              />
              <button
                className="del-btn"
                type="button"
                onClick={(e) => handleDelete(e, index, null)}
              >
                Delete
              </button>
              <ul>
                <span>Qualifications</span>
                {eduQual.quals?.map((qual, qualIndex) => (
                  <li key={qualIndex}>
                    <input
                      type="text"
                      onChange={(e) =>
                        handleUpdate(e, index, qualIndex, null, false)
                      }
                      value={qual}
                    />
                    <button
                      className="del-btn"
                      type="button"
                      onClick={(e) => handleDelete(e, index, qualIndex, false)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
                <button
                  className="add-btn"
                  type="button"
                  onClick={(e) => handleAdd(e, index, 'quals')}
                >
                  Add Item
                </button>
              </ul>
            </label>
          ))}
          <button
            className="add-btn"
            type="button"
            onClick={(e) => handleAdd(e, null, 'main')}
          >
            Add Section
          </button>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <h2>Education & Qualifications</h2>
          {eduQualsList.map((eduQual) => (
            <div className="edu-qual-item">
              <div className="edu-qual-item-top">
                <div className="edu-degree-type">{eduQual.degreeType}:</div>
                <div className="edu-degree">{eduQual.degree},</div>
                <div className="edu-date">{eduQual.date}</div>
              </div>
              <div className="edu-qual-item-bottom">
                <div className="edu-school">{eduQual.school}</div>
                {'-'}
                <div className="edu-location">{eduQual.location}</div>
              </div>
              <ul>
                {eduQual.quals?.map((qual) => (
                  <li>{qual}</li>
                ))}
              </ul>
            </div>
          ))}
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
});

export default EduQuals;
