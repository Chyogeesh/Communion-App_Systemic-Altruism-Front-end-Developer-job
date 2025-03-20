import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <h2>{event.title}</h2>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
