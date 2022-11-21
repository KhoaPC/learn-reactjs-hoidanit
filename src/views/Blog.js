import useFetch from "../utils/fetch";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddNewBlog from "./AddNewBlog";

// Component Blog
function Blog() {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: dataBlogs, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    false
  );

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 9);
      setNewData(data);
      console.log(newData);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    setNewData((current) => [blog, ...current]);
    setShow(false);
  };

  const deletePost = (id) => {
    setNewData((current) => current.filter((item) => item.id !== id));
  };

  return (
    <>
      <button className="btn-add" onClick={handleShow}>
        + Add new blog
      </button>
      <div className={!show && "hide"}>
        <span className="close" onClick={handleClose}>
          X
        </span>
        <span>Add New Blog</span>
        <div>
          <AddNewBlog handleAddNew={handleAddNew} />
        </div>
      </div>

      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title} </span>
                  <span onClick={() => deletePost(item.id)}>X</span>
                </div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}> View detail</Link>
                </button>
              </div>
            );
          })}

        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading data...
          </div>
        )}
      </div>
    </>
  );
}

export default Blog;
