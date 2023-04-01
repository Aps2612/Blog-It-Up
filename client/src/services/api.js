import axios from "axios";

const baseURL = "http://localhost:5000";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getBlogs = async () => {
  const response = await api.get("/");
  return response.data;
};

const getBlogById = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

const createBlog = async (blog) => {
try{
  const response = await api.post("/", blog);
  return response.data;
}catch(err){
   console.log(err);
}
};



const updateBlog = async (blog) => {
  const response = await api.put(`/${blog._id}`, blog);
  return response.data;
};

const deleteBlog = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

const obj = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
  };

export default obj;