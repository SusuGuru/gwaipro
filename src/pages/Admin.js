import { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author }),
    });

    alert("Blog created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} />
      <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />

      <button type="submit">Create Blog</button>
    </form>
  );
}

export default Admin;