import { Box, Stack, Typography } from "@mui/material";
import { ArtistCommunityCardType } from "@types";

import Image from "components/Image";

export default function ArtistCommunityCard({ image, name, handle }: ArtistCommunityCardType) {
  return (
    <Box sx={{ cursor: "pointer", overflow: "hidden" }}>
      <Box sx={{ overflow: "hidden" }}>
        <Image
          src={image}
          alt='artist community image'
          sx={{
            height: 350,
            width: 350,

            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>
      <Stack spacing={0} sx={{ padding: 2 }}>
        <Typography
          variant='h4'
          sx={{
            color: "common.black",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontFamily: "Dela Gothic One, cursive",
          }}
        >
          {name}
        </Typography>
        <Typography variant='subtitle2' sx={{ color: "grey.600", textTransform: "capitalize" }}>
          {handle}
        </Typography>
      </Stack>
    </Box>
  );
}
