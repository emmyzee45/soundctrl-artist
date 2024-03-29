// @mui

import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArtistBenefits, ArtistBenefitsThree, ArtistBenefitsTwo } from "assets";
import Image from "components/Image";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(15, 10),
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function Benefits() {
  return (
    <ContentStyle>
      <Typography
        variant='h2'
        sx={{ textTransform: "uppercase", fontWeight: 700, fontFamily: "Dela Gothic One, cursive" }}
      >
        BENEFITS
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent='space-between'
        spacing={3}
        alignItems='center'
        sx={{ mt: 2 }}
      >
        <Image src={ArtistBenefits} alt='benefits image' />
        <Typography
          variant='h4'
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            width: { md: "28ch" },
            color: "common.black",
            fontFamily: "Dela Gothic One, cursive",
          }}
        >
          SOUNDCTRL makes it easy for you to connect with your super fans.
        </Typography>
      </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent='space-between' sx={{ mt: 10 }}>
        <Stack spacing={2}>
          <Typography
            variant='h4'
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              width: { md: "28ch" },
              color: "common.black",
              fontFamily: "Dela Gothic One, cursive",
            }}
          >
            SOUNDCTRL makes it easy for you to connect with your super fans.
          </Typography>
          <Typography variant='subtitle2' sx={{ width: { md: "55ch" } }}>
            Not by just anyone, but an audience and community of 250k plus tastemakers…the day one
            early adopters that come to SoundCTRL to connect to the biggest fandoms in music like
            Billie Eilish, Post Malone, Lil Nas X and beyond.
          </Typography>
        </Stack>
        <Box>
          <Image
            src={ArtistBenefitsTwo}
            alt='benefits image'
            sx={{ position: "relative", left: -150 }}
          />
          <Image
            src={ArtistBenefitsThree}
            alt='benefits image'
            sx={{ position: "relative", bottom: 70, left: 20, width: 250 }}
          />
        </Box>
      </Stack>
    </ContentStyle>
  );
}
