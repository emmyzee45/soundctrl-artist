import { Icon } from "@iconify/react";
import { Button, Paper, Stack, Typography, IconButton, Snackbar } from "@mui/material";
import SectionContainer from "layouts/main/SectionContainer";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { secondaryButtonStyles } from "utils/cssStyles";
import NotistackProvider from '../components/NotistackProvider';
import axios from "axios";
import Notification from "components/Notification";

export default function CodeVerification() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(code+e.target.value)
  }
  
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ code1: string; code2: string; code3: string; code4: string }>();

  const onSubmit: SubmitHandler<{
    code1: string;
    code2: string;
    code3: string;
    code4: string;
  }> = async ({ code1, code2, code3, code4 }) => {
    try {
      //
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/verification/${code}`)
      //
      setOpenSnackbar(true);
      setSnackbarMessage(true);
      setTimeout(() => {}, 10000);
      res.status === 200 && navigate("/password/reset", 
      {state: {id: res.data}, replace: true}
      );
    } catch (error: any) {
      if(!error.response) {
        setMessage("No server response");
      } else if (error.response.status === 404) {
        setMessage("Invalid or expired token!");
      } else {
        setMessage("Internal server error");
      }
      setShow(true);
      setSnackbarMessage(false);
    }
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  const action = (
    <>
      <Button color='secondary' size='small' onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <Icon icon='iconoir:cancel' />
      </IconButton>
    </>
  );

  return (
    <SectionContainer>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <Stack justifyContent='center' alignItems='center' spacing={4}>
          <Typography variant='h2' sx={{ color: "common.black" }}>
            OTP Verification
          </Typography>

          <Typography
            variant='subtitle1'
            width='331px'
            sx={{ color: "#96989D", textAlign: "center" }}
          >
            Enter the verification code we just sent on your email address.
          </Typography>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
            action={action}
            message={snackbarMessage ? "Code verified" : "Error verifying code"}
          />

          <Stack justifyContent='center' marginInline='auto' width={{ md: "30%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} marginBlock={5}>
                <Paper
                  elevation={0}
                  component='div'
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {[1, 2, 3, 4].map((index) => (
                    <input
                      key={index}
                      type='text'
                      maxLength={1}
                      name={`code${index}`}
                      onChange={handleChange}
                      style={{
                        width: "70px",
                        fontStyle: "bold",
                        fontSize: "24px",
                        height: "60px",
                        marginRight: "30px",
                        border: "1px solid #E8ECF4",
                        borderRadius: "8px",
                        textAlign: "center",
                        background: "#E8ECF4",
                      }}
                      required
                      onFocus={(e) => (e.target.style.background = "#FFFFFF")}
                      onBlur={(e) =>
                        (e.target.style.background = e.target.value ? "#FFFFFF" : "#E8ECF4")
                      }
                    />
                  ))}
                </Paper>
                {errors.code1 && (
                  <span style={{ color: "red", textAlign: "left", fontSize: "5px" }}>
                    Code is required
                  </span>
                )}

                <Button variant='contained' size='large' sx={secondaryButtonStyles} type='submit'>
                  Verify
                </Button>
              </Stack>
            </form>
            <Typography variant='subtitle1' sx={{ color: "#96989D", textAlign: "center" }}>
              Please enter the 4-digit code sent to your email.
            </Typography>
          </Stack>
          <Notification 
            show={show} 
            setShow={setShow} 
            message={message} 
          />
        </Stack>
      </div>
    </SectionContainer>
  );
}
