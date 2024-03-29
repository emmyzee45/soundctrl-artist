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
import { useEffect } from "react";

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

export default function Register() {
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
  }, []);

  return (
    <RootStyle>
      <ContentStyle>
        <Typography variant='h2' sx={{ color: "common.black" }}>
          Hello! Register to get started
        </Typography>

        <Link underline='always' href='/register' color='rgba(253, 147, 76, 1)'>
          <Typography variant='subtitle1' sx={{ color: "orange" }}>
            log in now
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
                placeholder='Username'
                inputProps={{ "aria-label": "Username" }}
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
                placeholder='Enter your email'
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
                inputProps={{ "aria-label": "Password" }}
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
                placeholder='Confirm Password'
                inputProps={{ "aria-label": "Confirm Password" }}
                sx={{
                  bgcolor: "rgba(243, 243, 243, 1)",
                  padding: "8px 10px",
                  width: "100%",
                  border: "1px solid #E8ECF4",
                  borderRadius: 1,
                }}
              />
            </Paper>

            <Button
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
          <Divider>Or Register with</Divider>
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
    </RootStyle>
  );
}
