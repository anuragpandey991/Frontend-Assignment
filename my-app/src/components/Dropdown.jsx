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
        <option value="15m">Last 15 minutes</option>
        <option value="30m">Last 30 minutes</option>
        <option value="1h">Last 1 hour</option>
        <option value="3h">Last 3 hours</option>
        <option value="6h">Last 6 hours</option>
      </select>
    </div>
  );
}

export default Dropdown;
