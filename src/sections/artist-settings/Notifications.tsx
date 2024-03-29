// @mui
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 10),
}));

export default function Notifications() {
  return (
    <ContentStyle>
      <Typography variant='h2'>Notifications</Typography>
    </ContentStyle>
  );
}
