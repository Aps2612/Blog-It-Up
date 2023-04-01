import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from './services/api';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import BlogForm from './components/BlogForm';
import UpdateBlogForm from './components/UpdateBlogForm';
import DeleteBlogModal from './components/DeleteBlogModal';import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.getBlogs()
      .then(res => setBlogs(res))
      .catch(err => console.log(err));
  }, []);

  const handleCreateBlog = (blog) => {
    api.createBlog(blog)
      .then(res => setBlogs([...blogs, res]))
      .catch(err => console.log(err));
  };

  const handleUpdateBlog = (blog) => {
    api.updateBlog(blog)
      .then(res => setBlogs(blogs.map(b => b._id === res._id ? res : b)))
      .catch(err => console.log(err));
  };

  const handleDeleteBlog = (blog) => {
    api.deleteBlog(blog._id)
      .then(res => setBlogs(blogs.filter(b => b._id !== blog._id)))
      .catch(err => console.log(err));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} />} />
          <Route path="/blogs/new" element={<BlogForm handleCreateBlog={handleCreateBlog} />} />
          <Route path="/blogs/:id/edit" element={<UpdateBlogForm handleUpdateBlog={handleUpdateBlog} />} />
          <Route path="/blogs/:id/delete" element={<DeleteBlogModal handleDeleteBlog={handleDeleteBlog} />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;