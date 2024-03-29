import { Box, Stack, Typography } from "@mui/material";
import { FansCardType } from "@types";
import Avatar from "components/Avatar";

export default function FansCard({
  index,
  avatar,
  handle,
  count,
  fandom,
}: FansCardType & { index: number }) {
  return (
    <Stack spacing={3} direction='row' sx={{ cursor: "pointer" }}>
      <Typography variant='h3'>{index + 1}</Typography>
      <Avatar src={avatar} alt='fan avatars' sx={{ height: 80, width: 80 }} />
      <Box>
        <Typography variant='subtitle1' sx={{ color: "grey.800" }}>
          {handle}
        </Typography>
        <Typography variant='subtitle2' sx={{ color: "grey.600" }}>
          {count}
        </Typography>
        <Typography variant='subtitle2' sx={{ color: "grey.600" }}>
          {fandom}
        </Typography>
      </Box>
    </Stack>
  );
}
