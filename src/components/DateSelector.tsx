import React from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface DateSelectorProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateChange }) => {
  return (
    <div>
      {/* <Calendar
        onChange={(date) => {
          if (date instanceof Date) {
            onDateChange(date);
          }
        }}
        value={selectedDate}
        showNavigation
        selectRange={false}
      /> */}
    </div>
  );
};

export default DateSelector;
