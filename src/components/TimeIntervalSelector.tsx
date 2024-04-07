import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

interface TimeIntervalSelectorProps {
  onIntervalChange: (interval: number) => void;
}

const StyledSelect = styled('select')({
  width: '50%',
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
  outline: 'none',
});

const TimeIntervalSelector: React.FC<TimeIntervalSelectorProps> = ({ onIntervalChange }) => {
  const [selectedInterval, setSelectedInterval] = useState<number>(15);

  const handleIntervalChange = (interval: number) => {
    setSelectedInterval(interval);
    onIntervalChange(interval);
  };

  return (
    <div>
      <h2 style={{ fontSize: '18px', marginBottom: '8px', display: 'block' }}>Select Time Interval:</h2>
      <StyledSelect value={selectedInterval} onChange={(e) => handleIntervalChange(parseInt(e.target.value))}>
        <option value={15}>15 minutes</option>
        <option value={30}>30 minutes</option>
        <option value={45}>45 minutes</option>
      </StyledSelect>
    </div>
  );
};

export default TimeIntervalSelector;
