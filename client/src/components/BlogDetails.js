import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.getBlog(id)
      .then(res => setBlog(res))
      .catch(err => console.log(err));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetails;