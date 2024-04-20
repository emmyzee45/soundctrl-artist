// @mui
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import AcceptedTicketCard from "../../components/cards/AcceptedTicketCard";
import AppointmentScheduler from "../../components/AppointmentScheduler";
import { useAppSelector } from "../../redux/hooks";
import MyPricing from "./MyPricing";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function TimeTickets() {
  const user = useAppSelector((state) => state.user.currentUser);
  const bookings = useAppSelector((state) => state.booking.bookings.filter((item) => item.status === "sold"));

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
        <Box sx={{ width: "30%", my: 5 }}>
          <MyPricing />
        </Box>
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
          {bookings?.slice(0,6).map((item) => (
            <AcceptedTicketCard
              key={item.key}
              link={item.link}
              time={item.time}
              price={item.price}
              _id={item._id}
              meetingId={item?.meetingId}
              artistId={item.artistId}
            />
          ))}
        </Box>
      </Box>
    </ContentStyle>
  );
}
