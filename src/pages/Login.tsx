// @mui
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Divider,
  Input,
  InputBase,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { UserProps } from "@types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { getUserFailure, getUserStart, getUserSuccess } from "../redux/slice/UserSlice";
import Notification from "components/Notification";
import axios from "axios";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  textAlign: "center",
  padding: theme.spacing(15, 10),
  backgroundColor: "rgba(248, 248, 248, 0)",
}));

export default function Login() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [input, setInput] = useState<UserProps | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const from = location.state?.from?.pathname || "/artist-dashboard"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getUserStart())
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, input);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      dispatch(getUserSuccess(res.data.userInfo));
      localStorage.setItem("access_token", res.data.token);
      setMessage("Successfully logged In");
      setShow(true);
      setTimeout(() =>{
        navigate(from, {replace: true});
      },1000)
    }catch(err: any) {
      if(!err?.response) {
        setMessage("No server response");
      } else if(err?.response?.status === 400) {
        setMessage("Invalid Email or Password")
      } else if (err.response.status === 404) {
        setMessage("User not found!")
      } else {
        setMessage("Login failed!")
      }
      dispatch(getUserFailure());
      setShow(true);
    }
  }

  return (
    <RootStyle>
      <ContentStyle>
        <Typography variant='h2' sx={{ color: "common.black" }}>
          Hello! Log in to get started
        </Typography>

        <Link underline='always' href='/register' color='rgba(253, 147, 76, 1)'>
          <Typography variant='subtitle1' sx={{ color: "orange" }}>
            create your account
          </Typography>
        </Link>
        <Stack justifyContent='center' marginInline='auto' width={{ md: "30%" }}>
          <Stack spacing={2} marginBlock={5}>
            <Paper
              elevation={0}
              component='form'
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
                name="email"
                onChange={handleChange}
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
            <Paper
              elevation={0}
              component='form'
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
                name="password"
                onChange={handleChange}
                inputProps={{ "aria-label": "Password" }}
                sx={{
                  bgcolor: "rgba(243, 243, 243, 1)",
                  padding: "8px 10px",
                  width: "100%",
                  border: "1px solid #E8ECF4",
                  borderRadius: 1,
                }}
              />
              <Icon icon='fluent:eye-28-filled' style={{ position: "absolute", right: 10 }} />
            </Paper>
            <Link href='/forgot-password' sx={{ textAlign: "right", color: "#6A707C" }}>
              Forgot password?
            </Link>
            <Button
            onClick={handleSubmit}
              variant='contained'
              size='large'
              sx={{
                borderRadius: 1,
                bgcolor: "rgba(253, 147, 76, 1)",
                color: "common.white",
                boxShadow: "none",
              }}
            >
              Login
            </Button>
          </Stack>
          <Divider>Or Login with</Divider>
          <Stack direction='row' spacing={2} justifyContent='center' marginTop={5}>
            <Button size='large' sx={{ bgcolor: "#1877f2", paddingBlock: 2, paddingInline: 4 }}>
              <Icon icon='logos:facebook' />
            </Button>
            <Button
              size='large'
              sx={{ bgcolor: "common.white", border: "1px solid #E8ECF4", paddingInline: 4 }}
            >
              <Icon icon='flat-color-icons:google' />
            </Button>
            <Button size='large' sx={{ bgcolor: "common.black", paddingInline: 4 }}>
              <Icon icon='ri:apple-fill' color='white' />
            </Button>
          </Stack>
        </Stack>
      </ContentStyle>
      <Notification message={message} show={show} setShow={setShow}  />
    </RootStyle>
  );
}
