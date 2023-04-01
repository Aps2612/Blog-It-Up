import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <div className="card mb-4">
      <img src={blog.image} alt={blog.title} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <Link to={`/blogs/${blog._id}`} className="btn btn-primary mr-2">
          View Details
        </Link>
        <Link to={`/blogs/${blog._id}/edit`} className="btn btn-warning mr-2">
          Edit
        </Link>
        <Link
          to={`/blogs/${blog._id}/delete`}
          className="btn btn-danger mr-2"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Blog;