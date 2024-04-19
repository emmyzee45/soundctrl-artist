// @mui
import { Container, Typography, Stack, Paper, InputBase, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "utils/axios";

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
  padding: theme.spacing(10, 10),
}));

export default function Invite() {
  const [input, setInput] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async() => {
    try {
      const res = await publicRequest.post(`/waitlist/${input}`);
      res.status === 200 && navigate("/artist-socials", {state: {from: "/code"}, replace: true})
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <RootStyle>
      <Container>
        <Stack spacing={4} pt={20}>
          <Typography
            variant='h3'
            sx={{
              width: { md: "25ch" },
              textTransform: "uppercase",
              color: "common.black",
              fontFamily: "Dela Gothic One, cursive",
            }}
          >
            Our team have emailed you the invite code, put the invite code below.
          </Typography>
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
              placeholder='XXX - XX - XXXXX'
              inputProps={{ "aria-label": "invite code" }}
              onChange={(e) => setInput(e.target.value)}
              sx={{
                bgcolor: "common.white",
                padding: "8px 10px",
              }}
            />
          
            <Button
              variant='contained'
              onClick={handleSubmit}
              sx={{
                bgcolor: "common.black",
                color: "common.white",
                borderRadius: 2,
                width: "20%",
                position: "absolute",
                right: 0,
                boxShadow: "none",
                ":hover": {
                  bgcolor: "common.black",
                  color: "rgba(253, 147, 76, 1)",
                },
              }}
              size='large'
            >
              CONFIRM
            </Button>
          </Paper>
        </Stack>
      </Container>
    </RootStyle>
  );
}
