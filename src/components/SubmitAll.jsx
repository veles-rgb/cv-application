import React from 'react';

function SubmitAll({ sections }) {
  const handleSubmitAll = () => {
    sections.forEach((ref) => {
      if (ref.current && typeof ref.current.submit === 'function') {
        ref.current.submit();
      }
    });
  };

  return (
    <div className="submit-all-container">
      <button id="submit-all-btn" onClick={handleSubmitAll}>
        Submit All
      </button>
    </div>
  );
}

export default SubmitAll;
