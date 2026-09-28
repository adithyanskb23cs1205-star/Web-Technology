import { useState } from "react";
import EventList from "../components/EventList";
import eventsData from "../data/events";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = eventsData.filter((event) => {
    const nameMatches = event.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const categoryMatches =
      category === "All" || event.category === category;
    return nameMatches && categoryMatches;
  });

  return (
    <div className="page">
      <h1>TechFest Events</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search events"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Technical">Technical</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <EventList events={filteredEvents} />
    </div>
  );
}

export default Events;