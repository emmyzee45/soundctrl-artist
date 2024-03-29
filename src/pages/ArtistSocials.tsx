// @mui
import { Container, Typography, Stack, Paper, InputBase, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
  padding: theme.spacing(10, 10),
}));

export default function ArtistSocials() {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant='h3'
          sx={{
            fontWeight: 700,
            width: { md: "20ch" },
            color: "common.black",
            textTransform: "uppercase",
            fontFamily: "Dela Gothic One, cursive",
          }}
        >
          We want to know who your fandom is. Connect you platform.
        </Typography>
        <Stack spacing={2} sx={{ width: { md: "50%" }, mt: 5 }}>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: "2px 6px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <InputBase
              placeholder='Instagram'
              inputProps={{ "aria-label": "Instagram" }}
              sx={{
                bgcolor: "rgba(207, 207, 207, 1)",
                padding: "8px 10px",
                color: "rgba(0, 0, 0, 1)",
                borderRadius: 0.5,
                width: "100%",
              }}
            />
          </Paper>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: "2px 6px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <InputBase
              placeholder='Twitter'
              inputProps={{ "aria-label": "Twitter" }}
              sx={{
                bgcolor: "rgba(207, 207, 207, 1)",
                padding: "8px 10px",
                color: "rgba(0, 0, 0, 1)",
                borderRadius: 0.5,
                width: "100%",
              }}
            />
          </Paper>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: "2px 6px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <InputBase
              placeholder='Spotify'
              inputProps={{ "aria-label": "Spotify" }}
              sx={{
                bgcolor: "rgba(207, 207, 207, 1)",
                padding: "8px 10px",
                color: "rgba(0, 0, 0, 1)",
                borderRadius: 0.5,
                width: "100%",
              }}
            />
          </Paper>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: "2px 6px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <InputBase
              placeholder='Apple music'
              inputProps={{ "aria-label": "Apple music" }}
              sx={{
                bgcolor: "rgba(207, 207, 207, 1)",
                padding: "8px 10px",
                color: "rgba(0, 0, 0, 1)",
                borderRadius: 0.5,
                width: "100%",
              }}
            />
          </Paper>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: "2px 6px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <InputBase
              placeholder='Youtube'
              inputProps={{ "aria-label": "Youtube" }}
              sx={{
                bgcolor: "rgba(207, 207, 207, 1)",
                padding: "8px 10px",
                color: "rgba(0, 0, 0, 1)",
                borderRadius: 0.5,
                width: "100%",
              }}
            />
          </Paper>
        </Stack>
        <Stack direction='row' spacing={2} sx={{ mt: 5 }}>
          <Button
            variant='outlined'
            sx={{
              borderColor: "common.black",
              color: "common.black",
              borderRadius: 2,
              boxShadow: "none",
              width: 250,
              ":hover": {
                bgcolor: "common.black",
                color: "rgba(253, 147, 76, 1)",
              },
            }}
            size='large'
          >
            SKIP
          </Button>
          <Button
            variant='contained'
            sx={{
              bgcolor: "common.black",
              color: "common.white",
              borderRadius: 2,
              boxShadow: "none",
              width: 250,
              ":hover": {
                bgcolor: "common.black",
                color: "rgba(253, 147, 76, 1)",
              },
            }}
            size='large'
          >
            connect
          </Button>
        </Stack>
      </Container>
    </RootStyle>
  );
}
