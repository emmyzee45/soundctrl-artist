import { Box, Stack, Typography, Button } from "@mui/material";
import { ArtistCardType } from "@types";
import Avatar from "components/Avatar";
import Image from "components/Image";

const ArtistCard = ({ image, avatar, name, handle }: ArtistCardType) => {
  return (
    <Box sx={{ bgcolor: "rgba(237, 237, 237, 1)", borderRadius: 2, cursor: "pointer" }}>
      <Stack direction='row' spacing={3}>
        <Image src={image} alt='artist' sx={{ borderRadius: 2 }} />
        <Stack sx={{ padding: 2 }}>
          <Box>
            <Typography variant='h5' sx={{ color: "common.black", textTransform: "uppercase" }}>
              $3/mon
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ color: "common.black", textTransform: "uppercase" }}
            >
              price
            </Typography>
          </Box>
          <Box>
            <Typography variant='h5' sx={{ color: "common.black", textTransform: "uppercase" }}>
              12,888
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ color: "common.black", textTransform: "uppercase" }}
            >
              fan base
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          padding: 1,
          bgcolor: "common.white",
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction='row' spacing={1}>
          <Avatar src={avatar} alt='artist avatar' />
          <Box>
            <Typography variant='subtitle1' sx={{ color: "common.black" }}>
              {name}
            </Typography>
            <Typography variant='subtitle2' sx={{ color: "grey.800" }}>
              {handle}
            </Typography>
          </Box>
        </Stack>
        <Button
          variant='contained'
          sx={{
            bgcolor: "common.black",
            color: "common.white",
            boxShadow: "none",
            ":hover": {
              bgcolor: "common.black",
              color: "rgba(253, 147, 76, 1)",
            },
          }}
        >
          subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default ArtistCard;
