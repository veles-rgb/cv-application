import React from 'react';

function EditAll({ sections }) {
  const handleEditAll = () => {
    sections.forEach((ref) => {
      if (ref.current && typeof ref.current.edit === 'function') {
        ref.current.edit();
      }
    });
  };

  return (
    <div className="edit-all-container">
      <button id="edit-all-btn" onClick={handleEditAll}>
        Edit All
      </button>
    </div>
  );
}

export default EditAll;
