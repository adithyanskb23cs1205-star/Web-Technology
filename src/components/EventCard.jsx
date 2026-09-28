import { useState } from "react";

function EventCard({ event }) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats);

  const handleRegister = () => {
    if (seatsLeft > 0) {
      setSeatsLeft(seatsLeft - 1);
    }
  };

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>Category: {event.category}</p>
      <p>Fee: ₹{event.fee}</p>
      <p>Seats Left: {seatsLeft}</p>
      <button onClick={handleRegister} disabled={seatsLeft === 0}>
        {seatsLeft > 0 ? "Register" : "SOLD OUT"}
      </button>
    </div>
  );
}

export default EventCard;