import React, { useState } from 'react';

interface TimeIntervalSelectorProps {
  onIntervalChange: (interval: number) => void;
}

const TimeIntervalSelector: React.FC<TimeIntervalSelectorProps> = ({ onIntervalChange }) => {
  const [selectedInterval, setSelectedInterval] = useState<number>(15);

  const handleIntervalChange = (interval: number) => {
    setSelectedInterval(interval);
    onIntervalChange(interval);
  };

  return (
    <div>
      <label>Select Time Interval:</label>
      <select value={selectedInterval} onChange={(e) => handleIntervalChange(parseInt(e.target.value))}>
        <option value={15}>15 minutes</option>
        <option value={30}>30 minutes</option>
        <option value={45}>45 minutes</option>
      </select>
    </div>
  );
};

export default TimeIntervalSelector;
