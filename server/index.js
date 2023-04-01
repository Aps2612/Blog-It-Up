if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ayush:IUudv6cR6a63FGzH@cluster0.lnuuhjs.mongodb.net/test",{ useNewUrlParser : true });
const db =mongoose.connection
db.on('error',(error) => console.log(error.message));
db.once('open',()=> console.log("connected to database"));   


const blogRoutes = require("./routes/blogRoutes");

app.use("/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});