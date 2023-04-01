export const validateBlog = (blog) => {
    const errors = {};
  
    if (!blog.title) {
      errors.title = "Title is required";
    }
  
    if (!blog.author) {
      errors.author = "Author is required";
    }
  
    if (!blog.content) {
      errors.content = "Content is required";
    }
  
    return errors;
  };