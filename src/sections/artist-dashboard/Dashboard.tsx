// @mui
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { User } from "assets";
import AcceptedTicketCard from "../../components/cards/AcceptedTicketCard";
import ArtistFanCard from "../../components/cards/ArtistFanCard";
import LocationListCard from "../../components/cards/LocationListCard";
// import { ARTISTFANCARDS } from "data";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { BookingProps } from "@types";
import { getBookingFailure, getBookingStart, getBookingSuccess } from "../../redux/slice/BookingSlice";
import axios from "axios";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function Dashboard() {
  // const [bookings, setBookings] = useState<BookingProps[] | null>(null)
  const [openAll, setOpenAll] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);
  const fans = useAppSelector((state) => state.fan.fans);
  const bookings = useAppSelector((state) => state.booking.bookings)
  const filteredFans = [...fans].filter((fan) => user?.subscribedUsers?.includes(fan._id));
  
  const handleOpen = () => {
    setOpenAll(!openAll)
  }
  useEffect(() => {
    const getTicketBooking = async() => {
      dispatch(getBookingStart())
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/bookings/${user?._id}`);
        dispatch(getBookingSuccess(res.data));
      }catch(err) {
        console.log(err);
        dispatch(getBookingFailure())
      }
    }
    getTicketBooking();
  }, [])


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
              key={item.key}
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
            <Button onClick={handleOpen} sx={{ color: "common.black" }} >see all</Button>
          </Stack>
          <Stack justifyContent='space-between' direction='row' flexWrap='wrap' gap={2} marginY={3}>
            { !openAll ? (
              bookings?.slice(0,6).map((item) => (
                <AcceptedTicketCard 
                  key={item.key}
                  link={item.link}
                  time={item.time}
                  price={item.price}
                  _id={item._id}
                  meetingId={item.meetingId}
                  artistId={item.artistId}
                />
              ))
            ): (
              bookings?.map((item) => (
                <AcceptedTicketCard 
                  key={item.key}
                  link={item.link}
                  time={item.time}
                  price={item.price}
                  _id={item._id}
                  meetingId={item.meetingId}
                  artistId={item.artistId}
                />
              ))
            )}
          </Stack>
        </Box>
      </Stack>
    </ContentStyle>
  );
}
