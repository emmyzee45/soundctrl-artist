import React, { useState } from "react";
import { Paper, Grid } from "@mui/material";
import { alpha, Theme, useTheme, styled } from "@mui/material/styles";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import TimeIntervalSelector from "./TimeIntervalSelector";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.95),
}));

const AppointmentScheduler: React.FC = () => {
  const theme = useTheme<Theme>();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
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
    <StyledPaper>
      <h2>Appointment Scheduler</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TimeIntervalSelector onIntervalChange={handleIntervalChange} />
        </Grid>
        <Grid item xs={12}>
          <TimeSelector
            selectedTime={selectedTime}
            onTimeChange={handleTimeChange}
            timeInterval={timeInterval}
          />
        </Grid>
      </Grid>
      {selectedDate && selectedTime && (
        <div>
          Selected Date: {selectedDate.toLocaleDateString()}
          <br />
          Selected Time: {selectedTime}
        </div>
      )}
    </StyledPaper>
  );
};

export default AppointmentScheduler;
