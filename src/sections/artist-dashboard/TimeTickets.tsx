// @mui
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "components/Image";
import { Icon } from "@iconify/react";
import { Time } from "assets";
import { AcceptedTicketCard } from "components/cards";
import AppointmentScheduler from "components/AppointmentScheduler";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function TimeTickets() {
  return (
    <ContentStyle>
      <Typography
        variant='h4'
        sx={{
          textTransform: "uppercase",
          color: "common.black",
          fontFamily: "Dela Gothic One, cursive",
        }}
      >
        Connect with your BIGGEST fans
      </Typography>
      <Stack spacing={3} direction='row' mt={5} justifyContent='flex-end'>
        <Icon icon='mdi:timer-add-outline' height={85} width={85} />
        <Typography variant='subtitle1'>
          One of the best ways to increase your earning numbers is by connecting with your fans. Get
          started by sending them facetiming with them, sharing links to your new tracks, or
          replying to comments in you SuperChat
        </Typography>
      </Stack>
      <Typography
        variant='h4'
        sx={{
          textTransform: "uppercase",
          color: "common.black",
          fontFamily: "Dela Gothic One, cursive",
          my: 5,
        }}
      >
        my time
      </Typography>
      <AppointmentScheduler />
      {/* Time setup design here */}
      {/* <Image src={Time} alt='time' /> */}
      <Box sx={{ my: 5 }}>
        <Typography
          variant='h4'
          sx={{
            textTransform: "uppercase",
            color: "common.black",
            fontFamily: "Dela Gothic One, cursive",
          }}
        >
          MY PRICING
        </Typography>
      </Box>
      <Box sx={{ my: 5 }}>
        <Typography
          variant='h4'
          sx={{
            textTransform: "uppercase",
            color: "common.black",
            fontFamily: "Dela Gothic One, cursive",
          }}
        >
          Time booking SCHEDULES
        </Typography>
        <Box sx={{ width: "30%", my: 5 }}>
          <AcceptedTicketCard />
        </Box>
      </Box>
    </ContentStyle>
  );
}
