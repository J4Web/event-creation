
import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.title}>
            <strong>{event.title}</strong> - {event.date} - {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
