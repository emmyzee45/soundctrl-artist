import { Box, Stack, Typography } from "@mui/material";
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
          </Typography>
          <Typography variant='subtitle2' sx={{ color: "common.black" }}>
            {points} fan experience points
          </Typography>
        </Box>
        <Typography variant='subtitle2' sx={{ color: "grey.600" }}>
          {date}
        </Typography>
      </Stack>
    </Stack>
  );
}
