import React, { useState } from 'react';
import { database } from '../utilities/firebase';
import { ref, update } from 'firebase/database';
import '../styles/CourseForm.css';

const CourseForm = ({ course, onCancel }) => {
  const [title, setTitle] = useState(course ? course.title : '');
  const [meets, setMeets] = useState(course ? course.meets : '');
  const [errors, setErrors] = useState({ title: '', meets: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateTitle = (value) => {
    return value.length >= 2 ? '' : 'Title must be at least 2 characters long.';
  };

  const validateMeets = (value) => {
    if (!value) return '';
    const regex = /^[MTWRF]+ \d{1,2}:\d{2}-\d{1,2}:\d{2}$/;
    return regex.test(value) ? '' : 'Must contain days and times, e.g., MWF 12:00-13:20.';
  };

  const hasChanges = () => {
    return title !== course.title || meets !== course.meets;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const titleError = validateTitle(title);
    const meetsError = validateMeets(meets);

    if (titleError || meetsError) {
      setErrors({ title: titleError, meets: meetsError });
      return;
    }

    if (!hasChanges()) {
      alert('No changes detected.');
      return;
    }

    setIsSubmitting(true);

    try {
      const courseRef = ref(database, `courses/${course.number}`);
      await update(courseRef, { title, meets });
      alert('Course updated successfully.');
      onCancel();
    } catch (error) {
      console.error('Error updating course:', error);
      alert('Failed to update course. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors({ ...errors, title: validateTitle(e.target.value) });
              }}
              placeholder="Enter course title"
            />
            {errors.title && <p className="error-message">{errors.title}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="meets">Meeting Times</label>
            <input
              type="text"
              id="meets"
              value={meets}
              onChange={(e) => {
                setMeets(e.target.value);
                setErrors({ ...errors, meets: validateMeets(e.target.value) });
              }}
              placeholder="e.g., MWF 10:00-11:00"
            />
            {errors.meets && <p className="error-message">{errors.meets}</p>}
          </div>
          <button type="button" onClick={onCancel} className="cancel-button" disabled={isSubmitting}>
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={isSubmitting || !hasChanges()}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
