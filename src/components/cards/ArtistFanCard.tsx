import { Box, Stack, Typography } from "@mui/material";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
import { ArtistFanCardType, UserProp } from "@types";
import Avatar from "components/Avatar";

export default function ArtistFanCard({ avatarImg, username, points }: UserProp) {
  return (
    <Stack spacing={3} direction='row' sx={{ cursor: "pointer" }}>
      <Avatar src={avatarImg} alt='fan avatars' sx={{ height: 80, width: 80, borderRadius: 1 }} />
      <Stack spacing={3}>
        <Box>
          <Typography variant='subtitle1' sx={{ color: "common.black" }}>
            {username}
<<<<<<< HEAD
=======
import { ArtistFanCardType } from "@types";
import Avatar from "components/Avatar";

export default function ArtistFanCard({ avatar, name, points, date }: ArtistFanCardType) {
  return (
    <Stack spacing={3} direction='row' sx={{ cursor: "pointer" }}>
      <Avatar src={avatar} alt='fan avatars' sx={{ height: 80, width: 80, borderRadius: 1 }} />
      <Stack spacing={3}>
        <Box>
          <Typography variant='subtitle1' sx={{ color: "common.black" }}>
            {name}
>>>>>>> 907b60ac692199d52a0dfdb2db536c01a786ca99
=======
>>>>>>> main
          </Typography>
          <Typography variant='subtitle2' sx={{ color: "common.black" }}>
            {points} fan experience points
          </Typography>
        </Box>
        <Typography variant='subtitle2' sx={{ color: "grey.600" }}>
<<<<<<< HEAD
<<<<<<< HEAD
          {/* {date} */}Join since 09,2023
=======
          {date}
>>>>>>> 907b60ac692199d52a0dfdb2db536c01a786ca99
=======
          {/* {date} */}Join since 09,2023
>>>>>>> main
        </Typography>
      </Stack>
    </Stack>
  );
}
