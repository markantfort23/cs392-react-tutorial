const parseMeeting = (meeting) => {
    if (!meeting) return { days: [], startTime: null, endTime: null };
  
    const [days, timeRange] = meeting.split(' ');
    const [startTime, endTime] = timeRange.split('-').map(parseTime);
    return { days: days.split(''), startTime, endTime };
  };
  
  const parseTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  
  const daysOverlap = (days1, days2) => {
    return days1.some(day => days2.includes(day));
  };
  
  const timesOverlap = (start1, end1, start2, end2) => {
    return start1 < end2 && start2 < end1;
  };
  
  export const hasTimeConflict = (course1, course2) => {
    if (course1.term !== course2.term) return false;
  
    const { days: days1, startTime: start1, endTime: end1 } = parseMeeting(course1.meets);
    const { days: days2, startTime: start2, endTime: end2 } = parseMeeting(course2.meets);
  
    return daysOverlap(days1, days2) && timesOverlap(start1, end1, start2, end2);
  };
  
  export const hasConflictWithSelected = (course, selectedCourses) => {
    return selectedCourses.some(selectedCourse => hasTimeConflict(course, selectedCourse));
  };
  