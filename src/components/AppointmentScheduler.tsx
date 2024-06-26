import React, { useEffect, useRef, useState } from "react";
import { Paper, Grid, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TimeSelector from "./TimeSelector";
import { gapi } from "gapi-script";
import TimeIntervalSelector from "./TimeIntervalSelector";
import Notification from "./Notification";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addBookingFailure, addBookingStart, addBookingSuccess } from "../redux/slice/BookingSlice";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const dateRef = useRef<HTMLDivElement>(null);
  // const code = new URLSearchParams(location.search).get("code");

  const user = useAppSelector((state) => state.user.currentUser);

  const formattedDate = selectedDate ? new Date(selectedDate).toLocaleDateString() : "";
  const formattedTime = selectedTime ? selectedTime : "";
  // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  // const scope = "https://www.googleapis.com/auth/calendar";

  // useEffect(() => {
  //   const start: any = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope
  //     })
  //   }

  //   gapi.load("client:auth2", start)
  //   // const access = gapi.auth.getToken();
  //   // console.log(access)
  // },  [clientId]);

  useEffect(() => {
    dateRef?.current?.focus();
  },[])

  // useEffect(() => {
  //   const getRefreshToken = async() => {
  //     try {
  //       const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/bookings/google?code=${code}`);
  //       console.log(res)
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  
  //   if(code) getRefreshToken();
      
  // },[code])

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

  const handleSaveSchedule = async() => {
    // Logic to save the schedule <Emmy>
    setScheduleSaved(true);
    const startTime = selectedTime.split("-")[0];
    const endTime = selectedTime.split("-")[1];
    console.log("Schedule actions occurs")
    dispatch(addBookingStart())
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/bookings`, {
        start: `${0+formattedDate} ${startTime?.trim()}`, 
        end: `${0+formattedDate} ${endTime?.trim()}`, 
        interval: timeInterval,
        time: selectedTime,
        date:  `0${formattedDate} ${formattedTime}`,
        id: user?._id,
      });
      console.log(res.data)
      if(res.status === 201) {
        handleGoogleUrl(res.data)
      }else {
        dispatch(addBookingSuccess(res.data))
        setMessage("You have updated your available scheduled from google calendar");
        setShow(true);
      }
    }catch(err) {
      console.log(err)
      dispatch(addBookingFailure())
    }
  };

  const handleGoogleUrl = (url: string) => {
    try {
      window.location.href = url
    }catch(err) {
      console.log(err)
    }
  }


  return (
    <StyledPaper>
      <h2>
        Appointment Scheduler
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar<Date> value={selectedDate} onChange={handleDateChange} ref={dateRef} />
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
                onClick={handleSaveSchedule}
              >
                SAVE THIS SCHEDULE
              </Button>
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
