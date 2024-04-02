import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface DateSelectorProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateChange }) => {
  const [calendarDate, setCalendarDate] = useState<Date | null>(selectedDate);

  return (
    <div>
      <Calendar
        onChange={(date) => {
          if (date instanceof Date) {
            setCalendarDate(date);
            onDateChange(date);
          }
        }}
        value={calendarDate} // Use single Date or null instead of Date[] or null
        showNavigation // Show navigation buttons for selecting different months and years
        selectRange={false} // Disable the range selection feature
      />
    </div>
  );
};

export default DateSelector;
