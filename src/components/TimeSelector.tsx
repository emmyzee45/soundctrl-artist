import React from "react";
import { styled } from "@mui/material/styles";

interface TimeSelectorProps {
  selectedTime: string;
  onTimeChange: (time: string) => void;
  timeInterval: number;
}

const StyledSelect = styled("select")({
  width: "30%", 
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f9f9f9",
  boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
  outline: "none",
});

const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedTime,
  onTimeChange,
  timeInterval,
}) => {
  const startTimeHour = 7;
  const endTimeHour = 23;

  // Generate time slots based on the selected time interval
  const timeSlots: string[] = [];
  const intervalInMinutes = timeInterval;

  for (let hour = startTimeHour; hour <= endTimeHour; hour++) {
    for (let minute = 0; minute < 60; minute += intervalInMinutes) {
      const startHour = hour.toString().padStart(2, "0");
      const startMinute = minute.toString().padStart(2, "0");
      const endMinute = (minute + intervalInMinutes) % 60;
      const endHour = (hour + Math.floor((minute + intervalInMinutes) / 60))
        .toString()
        .padStart(2, "0");
      const startTime = `${startHour}:${startMinute}`;
      const endTime = `${endHour}:${endMinute.toString().padStart(2, "0")}`;
      const timeSlot = `${startTime} - ${endTime}`;
      timeSlots.push(timeSlot);
    }
  }

  return (
    <div>
      <h2 style={{ fontSize: "18px", marginBottom: "8px", display: "block" }}>
        Select Time:
      </h2>
      <StyledSelect value={selectedTime} onChange={(e) => onTimeChange(e.target.value)}>
        <option value=''>Select</option>
        {timeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export default TimeSelector;
