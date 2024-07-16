const express = require("express");
const blogRouter = express.Router();

const { fetchListOfblogs, addNewblog, updateBlog, deleteBlog } = require("../controller/blog-controller");

blogRouter.get("/", fetchListOfblogs);
blogRouter.post("/add", addNewblog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

module.exports = blogRouter;
