import React, { useState } from 'react';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import TimeIntervalSelector from './TimeIntervalSelector';

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timeInterval, setTimeInterval] = useState<number>(15);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  const handleIntervalChange = (interval: number) => {
    setTimeInterval(interval);
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>
      <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
      <TimeIntervalSelector onIntervalChange={handleIntervalChange} />
      <TimeSelector selectedTime={selectedTime} onTimeChange={handleTimeChange} timeInterval={timeInterval} />
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
