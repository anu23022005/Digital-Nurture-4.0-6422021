import React from 'react';

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div style={{ borderLeft: '4px solid green', paddingLeft: '10px', width: '30%' }}>
      <h2>Course Details</h2>
      {courses.map((course, i) => (
        <div key={i}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
