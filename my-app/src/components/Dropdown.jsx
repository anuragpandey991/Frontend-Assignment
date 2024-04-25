import React, { useState } from 'react';

function Dropdown({ onDurationChange }) {
  const [selectedDuration, setSelectedDuration] = useState("5m");

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    // Pass the selected duration to the parent component
    onDurationChange(duration);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <select value={selectedDuration} onChange={(e) => handleDurationChange(e.target.value)}>
        <option value="5m">Last 5 minutes</option>
        <option value="1h">Last 1 hour</option>
        <option value="1d">Last 1 day</option>
      </select>
    </div>
  );
}

export default Dropdown;
