import React from 'react';

const TermSelector = ({ selectedTerm, setSelectedTerm }) => {
  return (
    <div className="term-selector">
      <button
        className={selectedTerm === 'Fall' ? 'selected' : ''}
        onClick={() => setSelectedTerm('Fall')}
      >
        Fall
      </button>
      <button
        className={selectedTerm === 'Winter' ? 'selected' : ''}
        onClick={() => setSelectedTerm('Winter')}
      >
        Winter
      </button>
      <button
        className={selectedTerm === 'Spring' ? 'selected' : ''}
        onClick={() => setSelectedTerm('Spring')}
      >
        Spring
      </button>
    </div>
  );
};

export default TermSelector;
