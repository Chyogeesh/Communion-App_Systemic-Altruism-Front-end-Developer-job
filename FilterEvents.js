import React from 'react';

const FilterEvents = ({ setFilter }) => {
  return (
    <div className="filter-events">
      <label>Filter by Category: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
    </div>
  );
};

export default FilterEvents;
