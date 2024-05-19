// @mui
import { Icon } from "@iconify/react";
import {
  Button,
  InputBase,
  Link,
  Paper,
  Stack,
  Typography,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionContainer from "layouts/main/SectionContainer";
import { PasswordType } from "../@types/auth";
import { createPasswordSchema } from "utils/validationSchema";
import { secondaryButtonStyles } from "utils/cssStyles";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Notification from "components/Notification";

export default function Register() {
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createPasswordSchema>>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<PasswordType> = async ({ password }) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/auth/reset/${location.state.id}`, {password}
      )
      setOpenSnackbar(true);
      setSnackbarMessage(true);
      res.status === 200 && navigate("/successful");
    } catch (error) {
      setShow(true);
      setMessage("Server error");
      console.error("Create Password failed:", error);
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
      <Typography variant='h2' sx={{ color: "common.black" }}>
        Create new password
      </Typography>

      <Typography variant='subtitle1' sx={{ color: "#8391A1" }}>
        Your new password must be unique from those previously used.
      </Typography>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        message={
          snackbarMessage ? "Successfully register, Please Login" : "Error registering account"
        }
      />

      <Stack justifyContent='center' marginInline='auto' width={{ md: "30%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder='Password'
                type={showPassword ? "text" : "password"}
                {...register("password")}
                inputProps={{ "aria-label": "Password" }}
                sx={{
                  bgcolor: "rgba(243, 243, 243, 1)",
                  padding: "8px 10px",
                  width: "100%",
                  border: "1px solid #E8ECF4",
                  borderRadius: 1,
                }}
              />
              <Icon
                icon='fluent:eye-28-filled'
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 10, cursor: "pointer" }}
              />
            </Paper>
            {errors.password && (
              <span style={{ color: "red", textAlign: "left", fontSize: "5px" }}>
                {errors.password.message}
              </span>
            )}
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
                placeholder='Confirm Password'
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword")}
                inputProps={{ "aria-label": "Confirm Password" }}
                sx={{
                  bgcolor: "rgba(243, 243, 243, 1)",
                  padding: "8px 10px",
                  width: "100%",
                  border: "1px solid #E8ECF4",
                  borderRadius: 1,
                }}
              />
              <Icon
                icon='fluent:eye-28-filled'
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: 10, cursor: "pointer" }}
              />
            </Paper>
            {errors.password && (
              <span style={{ color: "red", textAlign: "left", fontSize: "5px" }}>
                {errors.password.message}
              </span>
            )}
            <Button type='submit' variant='contained' size='large' sx={secondaryButtonStyles}>
              Reset Password
            </Button>
          </Stack>
        </form>
      </Stack>
      <Notification 
        show={show}
        setShow={setShow}
        message={message}
      />
    </SectionContainer>
  );
}
