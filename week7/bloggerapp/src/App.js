import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '30px' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3d59' }}> Blogger Dashboard</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        <CourseDetails />
        <BookDetails />
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
