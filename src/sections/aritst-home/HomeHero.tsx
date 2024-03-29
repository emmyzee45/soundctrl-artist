// @mui

import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(15, 10),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function HomeHero() {
  return (
    <ContentStyle>
      <Stack spacing={5} sx={{ width: { md: "60%" } }}>
        <Box>
          <Typography
            variant='h2'
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              color: "common.black",
              fontFamily: "Dela Gothic One, cursive",
            }}
          >
            This is SOUNDCTRL
          </Typography>
          <Typography
            variant='h2'
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              color: "common.black",
              fontFamily: "Dela Gothic One, cursive",
            }}
          >
            for artist.
          </Typography>
        </Box>
        <Typography variant='h3' sx={{ fontWeight: 400 }}>
          Introducing our all in one platform to help artists accelerate their relationships with
          superfans
        </Typography>
        <Stack direction='row' spacing={2}>
          <Link to='/invite' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              size='large'
              sx={{
                bgcolor: "common.black",
                color: "common.white",
                width: "fit-content",
                boxShadow: "none",
                textTransform: "uppercase",
                ":hover": {
                  bgcolor: "common.black",
                  color: "rgba(253, 147, 76, 1)",
                },
              }}
            >
              I have the INVITE CODE
            </Button>
          </Link>

          <a href='https://forms.gle/6VQubbMuw2Wc9y9x9' target='_blank' rel='noopener'>
            <Button
              variant='contained'
              size='large'
              sx={{
                bgcolor: "common.black",
                color: "common.white",
                width: "fit-content",
                boxShadow: "none",
                textTransform: "uppercase",
                ":hover": {
                  bgcolor: "common.black",
                  color: "rgba(253, 147, 76, 1)",
                },
              }}
            >
              Apply to join the waitlist
            </Button>
          </a>
        </Stack>
      </Stack>
    </ContentStyle>
  );
}
