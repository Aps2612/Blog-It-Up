import React from 'react';

function DeleteBlogModal({ blog, handleDeleteBlog }) {
  return (
    <div className="delete-modal">
      <h2>Are you sure you want to delete this blog?</h2>
      <p>{blog.title} by {blog.author}</p>
      <button onClick={() => handleDeleteBlog(blog)}>Delete</button>
    </div>
  );
}

export default DeleteBlogModal;