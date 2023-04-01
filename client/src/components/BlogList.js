import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
      <Link to="/blogs/new"><button>Create New Blog</button></Link>
    </div>
  );
}

export default BlogList;