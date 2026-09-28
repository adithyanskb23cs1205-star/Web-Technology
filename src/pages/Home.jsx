import { useState, useEffect } from "react";

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Custom English fallback titles and descriptions
  const customEventData = [
    {
      title: "AI & Machine Learning Keynote",
      body: "Explore the future of artificial intelligence, deep learning models, and neural network applications with industry experts."
    },
    {
      title: "24-Hour Hackathon Challenge",
      body: "Collaborate in teams to build innovative solutions for real-world business and environmental problems."
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      body: "Learn network security fundamentals, vulnerability analysis, and penetration testing techniques hands-on."
    },
    {
      title: "Cloud Computing Workshop",
      body: "Master serverless architecture, microservices deployment, and cloud infrastructure management."
    },
    {
      title: "Game Development Expo",
      body: "Experience upcoming indie games and learn 3D environment rendering with modern game engines."
    },
    {
      title: "Robotics Design Showcase",
      body: "Watch autonomous drones and custom-built robots compete in real-time navigational challenges."
    }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Merge API IDs with readable English content
        const readableData = data.map((item, index) => ({
          id: item.id,
          title: customEventData[index]?.title || "TechFest Special Event",
          body: customEventData[index]?.body || "Join us for an exciting technical session."
        }));

        setEvents(readableData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Welcome to TechFest 2026</h1>
      <h2>Events from API</h2>
      <div className="event-list">
        {events.map((post) => (
          <div key={post.id} className="event-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;