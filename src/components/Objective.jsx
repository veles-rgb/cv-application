import { useState, useImperativeHandle, forwardRef } from 'react';
import '../styles/Objective.css';

const Objective = forwardRef((props, ref) => {
  const [editMode, setEditMode] = useState(true);
  const [objectiveData, setObjectiveData] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non erat enim. Praesent pharetra purus tellus, facilisis consequat augue mattis vel. Sed eu erat a quam facilisis scelerisque nec eu magna. Nam ac enim eros. Sed posuere dictum sagittis. Suspendisse quis tincidunt orci. Quisque vel purus in odio tempor sodales at a erat. Aenean tempus nec sem sed convallis. Quisque dolor leo, eleifend sit amet ornare vitae, tristique sit amet est. Donec eu lacus quis odio lobortis posuere. Proin quis sapien at sem iaculis laoreet nec vitae arcu.'
  );

  const handleObjective = (e) => {
    setObjectiveData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  function handleEdit() {
    setEditMode(true);
  }
  useImperativeHandle(ref, () => ({
    submit: handleSubmit,
  }));

  return (
    <div id="objective-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>Career Objective</h1>
          <label>
            <textarea
              onChange={handleObjective}
              value={objectiveData}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non erat enim. Praesent pharetra purus tellus, facilisis consequat augue mattis vel. Sed eu erat a quam facilisis scelerisque nec eu magna. Nam ac enim eros. Sed posuere dictum sagittis. Suspendisse quis tincidunt orci. Quisque vel purus in odio tempor sodales at a erat. Aenean tempus nec sem sed convallis. Quisque dolor leo, eleifend sit amet ornare vitae, tristique sit amet est. Donec eu lacus quis odio lobortis posuere. Proin quis sapien at sem iaculis laoreet nec vitae arcu."
            ></textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <h2>Career Objective</h2>
          <p>{objectiveData}</p>
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
});

export default Objective;
