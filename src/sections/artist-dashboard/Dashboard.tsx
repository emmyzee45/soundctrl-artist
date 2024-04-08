// @mui
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { User } from "assets";
import AcceptedTicketCard from "../../components/cards/AcceptedTicketCard";
import ArtistFanCard from "../../components/cards/ArtistFanCard";
import LocationListCard from "../../components/cards/LocationListCard";
// import { ARTISTFANCARDS } from "data";
import { useAppSelector } from "../../redux/hooks";
import { makeRequest } from "utils/axios";
import { useEffect, useState } from "react";
import { BookingProps } from "@types";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function Dashboard() {
  const [bookings, setBookings] = useState<BookingProps[] | null>(null)
  const user = useAppSelector((state) => state.user.currentUser);
  const fans = useAppSelector((state) => state.fan.fans);
  const filteredFans = [...fans].filter((fan) => user?.subscribedUsers?.includes(fan._id));
  
  useEffect(() => {
    const getTicketBooking = async() => {
      try {
        const res = await makeRequest.get(`/bookings/${user?._id}`);
        setBookings(res.data)
      }catch(err) {
        console.log(err);
      }
    }
    getTicketBooking();
  }, [])

  console.log(bookings)

  return (
    <ContentStyle>
      <Stack spacing={3}>
        <Stack direction={{ md: "row" }} justifyContent='space-between'>
          <Stack spacing={2}>
            <Stack direction='row' spacing={3}>
              <Typography
                variant='h5'
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "Dela Gothic One, cursive",
                }}
              >
                TOP FANS
              </Typography>
              <Button sx={{ color: "common.black" }}>see all</Button>
            </Stack>
            {filteredFans?.splice(0, 4).map((item, index) => (
              <ArtistFanCard
                _id={item._id}
                avatarImg={item.avatarImg}
                username={item.username}
                points={item.points}
                // date={item.date}
              />
            ))}
          </Stack>
          <Stack spacing={2}>
            <Stack direction='row' spacing={3}>
              <Typography
                variant='h5'
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "Dela Gothic One, cursive",
                }}
              >
                TOP locations
              </Typography>
              <Button sx={{ color: "common.black" }}>see all</Button>
            </Stack>
            <LocationListCard city='San Francisco' fans='number of fans in this city' />
            <LocationListCard city='New York' fans='number of fans in this city' />
            <LocationListCard city='Georgia' fans='number of fans in this city' />
            <LocationListCard city='Atlanta' fans='number of fans in this city' />
            <LocationListCard city='LA' fans='number of fans in this city' />
          </Stack>
        </Stack>
        <Stack direction={{ md: "row" }} justifyContent='space-between'>
          <Box sx={{ width: { md: "35%" } }}>
            <Typography variant='caption'>Pro Tips: </Typography>
            <Typography variant='caption'>
              Whether you’re a bigger artist or just developing, Soundctrl for Artists helps you
              find your fans and market better to them.
            </Typography>
          </Box>
          <Box sx={{ width: { md: "35%" } }}>
            <Typography variant='caption'>Pro Tips: </Typography>
            <Typography variant='caption'>
              Engage with your followers by making more time available for your superfans to
              schedule a facetime call with you.
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Stack direction='row' spacing={4}>
            <Typography
              variant='h4'
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "Dela Gothic One, cursive",
              }}
            >
              Video Call Schedule
            </Typography>
            <Button sx={{ color: "common.black" }}>see all</Button>
          </Stack>
          <Stack justifyContent='space-between' direction='row' flexWrap='wrap' gap={2} marginY={3}>
            {bookings?.map((item) => (
              <AcceptedTicketCard 
                link={item.link}
                time={item.time}
                price={item.price}
                _id={item._id}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </ContentStyle>
  );
}
