import { useParams, useLocation } from "react-router-dom";
import useFetch from "../utils/fetch";
import "./Blog.css";
import { Link } from "react-router-dom";
const DetailBlog = () => {
  let { id } = useParams();

  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  return (
    <>
      <div>
        <Link to={"/blog"}>-- Back</Link>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID: {id} ---{" "}
              {isLoading === true ? "Loading data ..." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
