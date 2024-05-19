// @mui
import { Icon } from "@iconify/react";
import {
  Button,
  InputBase,
  Link,
  Paper,
  Stack,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";
import SectionContainer from "layouts/main/SectionContainer";
import { useState, useContext } from "react";
import { z } from "zod";
import { EmailType } from "../@types/auth";
import { forgotPasswordSchema } from "utils/validationSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { secondaryButtonStyles } from "utils/cssStyles";
import { AuthContext } from "contexts/JWTContext";
import { useNavigate } from "react-router-dom";
import Notification from "components/Notification";
import axios from "axios";

export default function ForgotPassword() {
  
  const [email, setEmail] = useState("");
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<EmailType> = async ({ email }) => {
    try {
      const response = await authContext;
      setOpenSnackbar(true);
      setSnackbarMessage(true);
      setTimeout(() => {}, 10000);

      console.log(response);
    } catch (error) {
      console.error("login failed: ", error);
      setSnackbarMessage(false);
    }
  };

  const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/forgot-password`, {email});
      setOpenSnackbar(true);
      setSnackbarMessage(true);
      setMessage("Password reset email sent!");
      setShow(true);
      setTimeout(() => {}, 10000);
      navigate("/password/verification")
    } catch (error: any) {
      if(!error?.response) {
        setMessage("No server response")
      } else if(error.response.status === 404) {
        setMessage("No account associated with this email!")
      } else {
        setMessage("Internal server error!")
      }
      setShow(true);
      setSnackbarMessage(false);
    }
  }

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
      <Typography variant='h2' sx={{ color: "common.black" }}>
        Forgot Password?
      </Typography>

      <Link underline='always' href='/login' color='rgba(253, 147, 76, 1)'>
        <Typography variant='subtitle1' sx={{ color: "orange" }}>
          Remember? Log in
        </Typography>
      </Link>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        message={snackbarMessage ? "Successfully Logged in" : "Error logging in account"}
      />

      <Stack justifyContent='center' marginInline='auto' width={{ md: "30%" }}>
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={2} marginBlock={5}>
            <Paper
              elevation={0}
              component='div'
              sx={{
                p: "2px 6px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                position: "relative",
              }}
            >
              <InputBase
                placeholder='Enter your email'
                {...register("email")}
                type='email'
                onChange={(e)=>setEmail(e.target.value)}
                inputProps={{ "aria-label": "Enter your email" }}
                sx={{
                  bgcolor: "rgba(243, 243, 243, 1)",
                  padding: "8px 10px",
                  width: "100%",
                  border: "1px solid #E8ECF4",
                  borderRadius: 1,
                }}
              />
            </Paper>
            {errors.email && (
              <span style={{ color: "red", textAlign: "left", fontSize: "5px" }}>
                {errors.email.message}
              </span>
            )}

            <Button variant='contained' size='large' sx={secondaryButtonStyles} type='submit'>
              Send code
            </Button>
          </Stack>
        </form>
        <Typography variant='subtitle1' sx={{ color: "#96989D" }}>
          Don't worry! It occurs. Please enter the email address linked with your account.
        </Typography>
      </Stack>
      <Notification message={message} setShow={setShow} show={show} />
    </SectionContainer>
  );
}
