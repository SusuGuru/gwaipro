import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/blogDetails.css";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://13.50.252.177:3000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Single blog response:", data);

        // Handle backend object vs array
        let singleBlog = null;
        if (Array.isArray(data)) {
          singleBlog = data[0];
        } else if (data.blog) {
          singleBlog = data.blog;
        } else {
          singleBlog = data;
        }

        setBlog(singleBlog);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-details">
      <img src={blog.image} alt="cover" className="blog-details-img" />
      <h1>{blog.title}</h1>
      <p className="blog-author">{blog.authorName}</p>
      {/* RICH HTML CONTENT FROM ADMIN */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

export default BlogDetails;