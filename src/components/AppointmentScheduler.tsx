import React, { useEffect, useState } from "react";
import { Paper, Grid, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TimeSelector from "./TimeSelector";
import { gapi } from "gapi-script";
import TimeIntervalSelector from "./TimeIntervalSelector";
import { useGoogleLogin } from "react-google-login";
import { start } from "nprogress";
import {auth, googleProvider } from "../firebase"
import { signInWithPopup } from "firebase/auth"
import Notification from "./Notification";
import { useAppDispatch } from "../redux/hooks";
import { addBookingFailure, addBookingStart, addBookingSuccess } from "../redux/slice/BookingSlice";
import axios from "axios";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.white, 0.95),
}));

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeInterval, setTimeInterval] = useState<number>(15);
  const [scheduleSaved, setScheduleSaved] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const dispatch = useAppDispatch();

  const formattedDate = selectedDate ? new Date(selectedDate).toLocaleDateString() : "";
  const formattedTime = selectedTime ? selectedTime : "";
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  const scope = "https://www.googleapis.com/auth/calendar";

  useEffect(() => {
    const start: any = () => {
      gapi.client.init({
        clientId: clientId,
        scope
      })
      // const accessToken = gapi.auth.getToken();
    }

    gapi.load("client:auth2", start)
    // const access = gapi.auth.getToken();
    // console.log(access)
  },  [clientId])

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

  const onSuccess = (res: any) => {
    handleSaveSchedule(res.tokenObj)
  }

  const onFailure = (res: any) => {
    // console.log(res)
  }


  const handleSaveSchedule = async(accessToken: any) => {
    // Logic to save the schedule <Emmy>
    setScheduleSaved(true);
    const startTime = selectedTime.split("-")[0];
    const endTime = selectedTime.split("-")[1];
    
    dispatch(addBookingStart())
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/bookings/`, {
        start: `${0+formattedDate} ${startTime.trim()}`, 
        end: `${0+formattedDate} ${endTime.trim()}`, 
        time: timeInterval,
        date:  `0${formattedDate} ${formattedTime}`,
        accessToken
      });
      console.log(res.data)
      dispatch(addBookingSuccess(res.data))
      setMessage("You have updated your available scheduled from google calendar");
      setShow(true);
    }catch(err) {
      console.log(err);
      dispatch(addBookingFailure())
    }
  };
  
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    scope,
    uxMode: "popup",
  });
  

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
                0{formattedDate} {formattedTime}
              </h5>
            </div>
          )}

          <Grid>
            <a href='#' style={{ textDecoration: "none", marginTop: "20px" }}>
              <Button
                variant='contained'
                disabled={!selectedTime || !selectedDate}
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
                onClick={signIn}
              >
                SAVE THIS SCHEDULE
              </Button>
            </a>
          </Grid>
          <Notification 
            show={show}
            setShow={setShow}
            message={message}
          />
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default AppointmentScheduler;
