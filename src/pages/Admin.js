import { useState, useEffect } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [blogs, setBlogs] = useState([]);

  const token = localStorage.getItem("adminToken");

  // Fetch existing blogs when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      if (!token) return;
      try {
        const res = await fetch("http://13.50.252.177:3000/api/blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, [token]);

  // Create a new blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setMessage("You must be logged in as admin.");
      return;
    }

    try {
      const res = await fetch("http://13.50.252.177:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, author }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Blog created successfully!");
        setTitle("");
        setContent("");
        setAuthor("");
        // Add the new blog to the list immediately
        setBlogs((prev) => [...prev, data]);
      } else {
        setMessage(data.message || "Failed to create blog.");
      }
    } catch (err) {
      console.error("Error creating blog:", err);
      setMessage("Network error: could not reach server.");
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "50px auto", padding: 20 }}>
      <h1>Admin Dashboard</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Create Blog</button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}

      <h2 style={{ marginTop: 40 }}>Existing Blogs</h2>
      {blogs.length === 0 && <p>No blogs found.</p>}
      <ul>
        {blogs.map((b) => (
          <li key={b._id || b.id}>
            <strong>{b.title}</strong> by {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;