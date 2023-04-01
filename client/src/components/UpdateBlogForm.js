import React, { useState } from 'react';

function UpdateBlogForm({ blog, handleUpdateBlog }) {
  const [title, setTitle] = useState(blog.title);
  const [author, setAuthor] = useState(blog.author);
  const [image, setImage] = useState(blog.image);
  const [description, setDescription] = useState(blog.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateBlog({ ...blog, title, author, image, description });
  };

  return (
    <div className="create-blog">
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Image URL:</label>
        <input
          type="text"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Update Blog</button>
      </form>
    </div>
  );
}

export default UpdateBlogForm;