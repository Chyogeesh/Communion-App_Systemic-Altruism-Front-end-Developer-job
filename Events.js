import React, { useState } from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import FilterEvents from '../components/FilterEvents';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Community Prayer', date: '2025-03-15', location: 'New York', category: 'Religious' },
    { id: 2, title: 'Charity Run', date: '2025-03-20', location: 'Los Angeles', category: 'Charity' },
  ]);
  const [filter, setFilter] = useState('All');

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

  return (
    <div className="events">
      <Header />
      <h1>Event Listing</h1>
      <FilterEvents setFilter={setFilter} />
      <EventList events={filteredEvents} />
      <EventForm addEvent={addEvent} />
    </div>
  );
};

export default Events;
