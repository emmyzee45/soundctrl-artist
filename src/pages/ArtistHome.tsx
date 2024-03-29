// @mui
import { styled } from "@mui/material/styles";
import { Benefits, HomeHero } from "sections/aritst-home";
// sections

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function ArtistHome() {
  return (
    <RootStyle>
      <HomeHero />
      <Benefits />
    </RootStyle>
  );
}
