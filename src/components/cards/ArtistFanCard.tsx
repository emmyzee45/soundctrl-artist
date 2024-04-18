import { Box, Stack, Typography } from "@mui/material";
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
          </Typography>
          <Typography variant='subtitle2' sx={{ color: "common.black" }}>
            {points} fan experience points
          </Typography>
        </Box>
        <Typography variant='subtitle2' sx={{ color: "grey.600" }}>
          {/* {date} */}Join since 09,2023
        </Typography>
      </Stack>
    </Stack>
  );
}
