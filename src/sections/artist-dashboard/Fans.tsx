// @mui
import { Icon } from "@iconify/react";
import { Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { User } from "assets";
import { ArtistFanCard } from "components/cards";
import { ARTISTFANCARDS } from "data";
import { useAppSelector } from "../../redux/hooks";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function Fans() {
  const fans = useAppSelector((state) => state.fan.fans);
  const user = useAppSelector((state) => state.user.currentUser);
  // const filteredFans = [...fans].filter((fan) => user?.subscribedUsers?.includes(fan._id) )
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
        TOP FANS
      </Typography>
      <Stack justifyContent='space-between' flexWrap='wrap' gap={2}>
        {fans?.map((item, index) => (
          <ArtistFanCard
            key={index}
            username={item.username}
            avatarImg={item.avatarImg}
            points={item.points}
            // date={item.date}
          />
        ))}
      </Stack>
    </ContentStyle>
  );
}
