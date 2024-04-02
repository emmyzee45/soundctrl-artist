// TimeSelector.tsx
import React from 'react';

interface TimeSelectorProps {
  selectedTime: string;
  onTimeChange: (time: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedTime, onTimeChange }) => {
  const timeSlots = ['8:00 - 8:45', '9:00 - 9:45', '10:00 - 10:45'];

  return (
    <div>
      <label>Select Time:</label>
      <select value={selectedTime} onChange={e => onTimeChange(e.target.value)}>
        {timeSlots.map(slot => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
