import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Grid, Link, Divider, Container, Typography, Stack, Box } from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
// components
import Logo from "../../components/Logo";
import SocialsButton from "../../components/SocialsButton";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
  padding: theme.spacing(2, 6),
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          component='p'
          variant='body2'
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          ©2023 SOUNDCTRL TECH, INC. All rights reserved.
        </Typography>
        <Stack direction='row' spacing={3}>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Icon icon='ri:instagram-fill' />
            <Typography variant='subtitle2'>Instagram</Typography>
          </Stack>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Icon icon='mdi:twitter' />
            <Typography variant='subtitle2'>Twitter</Typography>
          </Stack>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Icon icon='ic:baseline-discord' />
            <Typography variant='subtitle2'>Discord</Typography>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
