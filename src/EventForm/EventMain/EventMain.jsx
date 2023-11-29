import React, { useState } from 'react';

const EventForm = ({ onEventSubmit }) => {
  const [event, setEvent] = useState({ title: '', date: '', location: '', description: '' });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEventSubmit(event);
    setEvent({ title: '', date: '', location: '', description: '' });
  };

  return (
   <div class="container">
<h2>10Times Event!</h2>

<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="event-name">Event Name:</label>
    <input type="text" class="form-control" id="event-name" placeholder="Enter event name" name="title" value={event.title} onChange={handleChange} require />
  </div>

  <div class="form-group">
    <label for="event-description">Description:</label>
    <textarea class="form-control" id="event-description" placeholder="Enter event description"></textarea>
  </div>

  <div class="form-group">
    <label for="event-date">Date:</label>
    <input type="date" class="form-control" id="event-date" name="date" value={event.date} onChange={handleChange} required />
  </div>

  <div class="form-group">
    <label for="event-location">Location:</label>
    <input type="text" class="form-control" id="event-location" placeholder="Enter event location"  name="location" value={event.location} onChange={handleChange} required />
  </div>

  <div class="form-group">
    <label for="event-speaker">Speaker:</label>
    <input type="text" class="form-control" id="event-speaker" placeholder="Enter event speaker" />
  </div>

  <button type="submit" class="btn btn-primary">Create Event</button>
</form>
</div>

  );
};

export default EventForm;
