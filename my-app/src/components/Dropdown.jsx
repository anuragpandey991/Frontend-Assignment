import React, { useState } from 'react';

function Dropdown({ onDurationChange }) {
  const [selectedDuration, setSelectedDuration] = useState("5m");

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    onDurationChange(duration);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <select value={selectedDuration} onChange={(e) => handleDurationChange(e.target.value)}>
        <option value="5m">Last 5 minutes</option>
        <option value="15m">Last 1 hour</option>
        <option value="30m">Last 1 day</option>
        <option value="1h">Last 5 minutes</option>
        <option value="3h">Last 1 hour</option>
        <option value="6h">Last 1 day</option>
      </select>
    </div>
  );
}

export default Dropdown;
