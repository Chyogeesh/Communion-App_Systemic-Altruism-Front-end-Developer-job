import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Religious');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, date, location, category });
    setTitle('');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Add New Event</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
