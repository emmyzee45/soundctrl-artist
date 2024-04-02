import React, { useState } from 'react';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>
      <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
      <TimeSelector selectedTime={selectedTime} onTimeChange={handleTimeChange} />
      {selectedDate && selectedTime && (
        <div>
          Selected Date: {selectedDate.toLocaleDateString()}<br />
          Selected Time: {selectedTime}
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
