import React, { useState } from "react";
import { Paper, Grid, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TimeSelector from "./TimeSelector";
import TimeIntervalSelector from "./TimeIntervalSelector";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.95),
}));

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeInterval, setTimeInterval] = useState<number>(15);
  const [scheduleSaved, setScheduleSaved] = useState<boolean>(false);

  const handleDateChange = (date: Date | Date[] | null) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  const handleIntervalChange = (interval: number) => {
    setTimeInterval(interval);
  };

  const handleSaveSchedule = () => {
    // Logic to save the schedule <Emmy>
    setScheduleSaved(true);
  };

  const formattedDate = selectedDate ? new Date(selectedDate).toLocaleDateString() : "";
  const formattedTime = selectedTime ? selectedTime : "";

  return (
    <StyledPaper>
      <h2>
        Appointment Scheduler
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar<Date> value={selectedDate} onChange={handleDateChange} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TimeIntervalSelector onIntervalChange={handleIntervalChange} />
          <Grid item xs={12}>
            <TimeSelector
              selectedTime={selectedTime}
              onTimeChange={handleTimeChange}
              timeInterval={timeInterval}
            />
          </Grid>
          {selectedDate && selectedTime && (
            <div>
              <h5>
                {formattedDate} {formattedTime}
              </h5>
            </div>
          )}

          <Grid>
            <a href='#' style={{ textDecoration: "none", marginTop: "20px" }}>
              <Button
                variant='contained'
                size='large'
                sx={{
                  bgcolor: scheduleSaved ? "common.white" : "common.black",
                  color: scheduleSaved ? "common.black" : "common.white",
                  width: "fit-content",
                  boxShadow: "none",
                  marginTop: "10px",
                  textTransform: "uppercase",
                  border: scheduleSaved ? "1px solid black" : "none",
                  ":hover": {
                    bgcolor: scheduleSaved ? "common.white" : "common.black",
                    color: "rgba(253, 147, 76, 1)",
                  },
                }}
                onClick={handleSaveSchedule}
              >
                {scheduleSaved ? "CHANGE MY SCHEDULE" : "SAVE THIS SCHEDULE"}
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default AppointmentScheduler;
