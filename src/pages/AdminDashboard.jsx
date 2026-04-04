import { useState, useEffect } from "react";

function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [waitlist, setWaitlist] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("adminToken");

  // Fetch all admin data on mount
  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        // Fetch blogs
        const blogsRes = await fetch("http://13.50.252.177:3000/api/blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const blogsData = await blogsRes.json();
        setBlogs(blogsData);

        // Fetch waitlist
        const waitlistRes = await fetch("http://13.50.252.177:3000/api/waitlist", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const waitlistData = await waitlistRes.json();
        setWaitlist(waitlistData);

        // Fetch contact messages
        const contactRes = await fetch("http://13.50.252.177:3000/api/contact", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const contactData = await contactRes.json();
        setContacts(contactData);
      } catch (err) {
        console.error("Error fetching admin data:", err);
        setMessage("Failed to fetch data from server.");
      }
    };

    fetchData();
  }, [token]);

  return (
    <div style={{ maxWidth: 900, margin: "50px auto", padding: 20 }}>
      <h1>Admin Dashboard</h1>

      {message && <p style={{ color: "red" }}>{message}</p>}

      {/* Blogs Section */}
      <section style={{ marginTop: 30 }}>
        <h2>Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <ul>
            {blogs.map((b) => (
              <li key={b._id || b.id}>
                <strong>{b.title}</strong> by {b.author}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Waitlist Section */}
      <section style={{ marginTop: 30 }}>
        <h2>Waitlist</h2>
        {waitlist.length === 0 ? (
          <p>No waitlist entries.</p>
        ) : (
          <ul>
            {waitlist.map((w) => (
              <li key={w._id || w.id}>{w.name} - {w.email}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Contact Messages Section */}
      <section style={{ marginTop: 30 }}>
        <h2>Contact Messages</h2>
        {contacts.length === 0 ? (
          <p>No contact messages.</p>
        ) : (
          <ul>
            {contacts.map((c) => (
              <li key={c._id || c.id}>
                <strong>{c.name}</strong>: {c.message} ({c.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;