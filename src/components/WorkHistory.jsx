import { useState, useImperativeHandle, forwardRef } from 'react';

import '../styles/WorkHistory.css';

const WorkHistory = forwardRef((props, ref) => {
  const [editMode, setEditMode] = useState(true);
  const [workHistoryList, setWorkHistoryList] = useState([
    {
      position: 'Receptionist',
      date: '06/2021 to Current',
      company: 'Randstad Canada',
      location: 'Toronto, CA',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  function handleEdit() {
    setEditMode(true);
  }

  const handleHistoryUpdate = (e, index, item) => {
    const updatedHistory = [...workHistoryList];
    updatedHistory[index][item] = e.target.value;
    setWorkHistoryList(updatedHistory);
  };

  const handleAddHistory = () => {
    setWorkHistoryList([
      ...workHistoryList,
      { position: '', date: '', company: '', location: '' },
    ]);
  };

  const handleHistoryDelete = (e, index) => {
    const updatedHistory = workHistoryList.filter((_, i) => i !== index);
    setWorkHistoryList(updatedHistory);
  };

  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  return (
    <div id="work-history-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Work History</h1>
          {workHistoryList.map((work, index) => (
            <label key={index}>
              <span>Position</span>
              <input
                type="text"
                onChange={(e) => handleHistoryUpdate(e, index, 'position')}
                value={work.position}
              />
              <span>Date</span>
              <input
                type="text"
                onChange={(e) => handleHistoryUpdate(e, index, 'date')}
                value={work.date}
              />
              <span>Company</span>
              <input
                type="text"
                onChange={(e) => handleHistoryUpdate(e, index, 'company')}
                value={work.company}
              />
              <span>Location</span>
              <input
                type="text"
                onChange={(e) => handleHistoryUpdate(e, index, 'location')}
                value={work.location}
              />
              <button
                className="del-btn"
                type="button"
                onClick={(e) => handleHistoryDelete(e, index)}
              >
                Delete
              </button>
            </label>
          ))}
          <button className="add-btn" type="button" onClick={handleAddHistory}>
            Add History
          </button>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <h2>Work History</h2>
          {workHistoryList.map((work) => (
            <div className="work-history-item">
              <div className="work-item-top">
                <div className="work-position">{work.position},</div>
                <div className="work-date">{work.date}</div>
              </div>
              <div className="work-item-bottom">
                <div className="work-company">{work.company}</div>
                {'-'}
                <div className="work-location">{work.location}</div>
              </div>
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

export default WorkHistory;
