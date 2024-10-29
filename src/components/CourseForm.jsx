import React, { useState } from 'react';

const CourseForm = ({ course, onCancel }) => {
  const [title, setTitle] = useState(course ? course.title : '');
  const [meets, setMeets] = useState(course ? course.meets : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // nothing for now
  };

  return (
    <div className="form-overlay">
      <div className="form-content">
        <h2>Edit Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Course Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter course title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="meets">Meeting Times</label>
            <input
              type="text"
              id="meets"
              value={meets}
              onChange={(e) => setMeets(e.target.value)}
              placeholder="e.g., MWF 10:00-11:00"
            />
          </div>
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
