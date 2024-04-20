import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField, useMediaQuery, Theme } from "@mui/material";
import { TicketOne } from "assets";
import Image from "components/Image";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import axios from "axios";
import { updateBookingFailure, updateBookingStart, updateBookingSuccess } from "../../redux/slice/BookingSlice";
import Notification from "components/Notification";
import { useNavigate } from "react-router-dom";

export default function MyPricing() {
  const bookings = useAppSelector((state) => state.booking.bookings);
  const booking = bookings.filter((item) => item.status === "prepared")[0];
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [price, setPrice] = useState(booking?.price);
  const [message, setMessage] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [isTextFieldDisabled, setIsTextFieldDisabled] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const handleConfirm = async() => {
    dispatch(updateBookingStart())
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/bookings/${booking._id}`, 
        { price, status: "selling" }
      );
      dispatch(updateBookingSuccess(res.data));
      setMessage("We have updated the available schedule for your fans");
      setShow(true);
      setIsTextFieldDisabled(true);
      setButtonText("Change"); 
    }catch(err: any) {
      if(!err.response) {
        setMessage("No server response!")
      } else if (err.response.status === 401) {
        setMessage("Please login!")
      } else if(err.response.status == 403) {
        setMessage("Session expired login!")
      } else if(err.response.status == 404) {
        setMessage("Not found!")
      } else {
        setMessage("Internal server error")
      }
      dispatch(updateBookingFailure());
      setShow(true);
      if( err.response && (err.response?.status === 401 || err.response?.status === 403)) {
        setTimeout(() => {
          navigate("/login")
        },1000)
      }
    }
  };

  const handleChange = () => {
    setIsTextFieldDisabled(false);
    setButtonText("Confirm"); 
  };

  const [buttonText, setButtonText] = useState("Confirm");

  return (
    <>
    {booking && (
      <Box sx={{ bgcolor: "common.white", borderRadius: 2, mb: 2 }}>
      
      <Image src={TicketOne} alt='ticket image' />
      <Stack spacing={1} sx={{ padding: 2, bgcolor: "common.white", borderRadius: 5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          My time ticket
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#FD934C" }}>
          You can price your own time here.
        </Typography>
        <Stack direction={isSmallScreen ? "column" : "row"} alignItems={isSmallScreen ? "stretch" : "center"} spacing={1}>
          <TextField
            label="Pricing"
            variant="outlined"
            size="small"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            disabled={isTextFieldDisabled} 
            sx={{ width: isSmallScreen ? "100%" : "auto" }}
            />
          <Button
            variant='contained'
            onClick={isTextFieldDisabled ? handleChange : handleConfirm}
            sx={{
              width: isSmallScreen ? "100%" : "auto",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#FD934C",
              },
              marginTop: isSmallScreen ? "16px" : 0,
            }}
            >
            {buttonText}
          </Button>
          <Notification 
          show={show}
          message={message}
          setShow={setShow}
          />
        </Stack>
        </Stack>
        </Box>
      )}
      </>
      );
    }
