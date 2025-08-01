import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schwedenizer",
      description: "You can install React from npm."
    }
  ];

  return (
    <div style={{ borderLeft: '4px solid green', paddingLeft: '10px', width: '30%' }}>
      <h2>Blog Details</h2>
      {blogs.map((blog, i) => (
        <div key={i}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
