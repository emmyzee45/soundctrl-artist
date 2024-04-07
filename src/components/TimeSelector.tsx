import React from 'react';

interface TimeSelectorProps {
  selectedTime: string;
  onTimeChange: (time: string) => void;
  timeInterval: number;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ selectedTime, onTimeChange, timeInterval }) => {
  // Define the start and end times (7:00 AM to 11:45 PM)
  const startTimeHour = 7;
  const endTimeHour = 23;
  
  // Generate time slots based on the selected time interval
  const timeSlots: string[] = [];
  const intervalInMinutes = timeInterval;

  for (let hour = startTimeHour; hour <= endTimeHour; hour++) {
    for (let minute = 0; minute < 60; minute += intervalInMinutes) {
      const startHour = hour.toString().padStart(2, '0');
      const startMinute = minute.toString().padStart(2, '0');
      const endMinute = (minute + intervalInMinutes) % 60;
      const endHour = (hour + Math.floor((minute + intervalInMinutes) / 60)).toString().padStart(2, '0');
      const startTime = `${startHour}:${startMinute}`;
      const endTime = `${endHour}:${endMinute.toString().padStart(2, '0')}`;
      const timeSlot = `${startTime} - ${endTime}`;
      timeSlots.push(timeSlot);
    }
  }

  return (
    <div>
      <label>Select Time:</label>
      <select value={selectedTime} onChange={(e) => onTimeChange(e.target.value)}>
        <option value="">Select</option>
        {timeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;
