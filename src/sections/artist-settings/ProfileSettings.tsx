// @mui
import { styled } from "@mui/material/styles";
import {
  Typography,
  Stack,
  Paper,
  InputBase,
  Button,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import { User } from "assets";
import { Icon } from "@iconify/react";

// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 0),
}));

export default function ProfileSettings() {
  return (
    <ContentStyle>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
        <Stack spacing={2} sx={{ width: "50%" }}>
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
              placeholder='Nickname'
              inputProps={{ "aria-label": "Nickname" }}
              sx={{
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",
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
              placeholder='Bio'
              inputProps={{ "aria-label": "Bio" }}
              sx={{
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",
                width: "100%",
                height: 200,
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
              placeholder='Birthday'
              inputProps={{ "aria-label": "Birthday" }}
              sx={{
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

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
              placeholder='Find location'
              inputProps={{ "aria-label": "Find location" }}
              sx={{
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

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
              placeholder='Phone Number'
              inputProps={{ "aria-label": "Phone Number" }}
              sx={{
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

                width: "100%",
              }}
            />
          </Paper>
          <Stack direction='row' spacing={2}>
            <Button
              variant='contained'
              size='large'
              sx={{
                color: "common.white",
                bgcolor: "common.black",
                borderRadius: 1,
                boxShadow: "none",
              }}
            >
              Go to profile
            </Button>
            <Button
              variant='contained'
              size='large'
              sx={{
                color: "common.white",
                bgcolor: "common.black",
                borderRadius: 1,
                boxShadow: "none",
              }}
            >
              Save changes
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Stack direction='row' spacing={2}>
            <Avatar src={User} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }} />
            <Stack spacing={1}>
              <Typography variant='subtitle2'>Avatar</Typography>
              <Typography variant='subtitle2' sx={{ width: "35ch" }}>
                Sound supports.jpg, .png, and . gif files up to 10MB. Recommended size is 600 x
                600px
              </Typography>
            </Stack>
          </Stack>
          <Stack direction='row' spacing={2}>
            <IconButton
              sx={{
                bgcolor: "rgba(34, 34, 34, 1)",
                borderRadius: 2,
                padding: 2,
                width: 65,
                height: 65,
              }}
            >
              <Icon icon='ic:round-plus' color='white' />
            </IconButton>
            <Stack spacing={1}>
              <Typography variant='subtitle2'>Banner</Typography>
              <Typography variant='subtitle2' sx={{ width: "35ch" }}>
                Sound supports.jpg, .png, and . gif files up to 10MB. Recommended size is 600 x
                600px
              </Typography>
            </Stack>
          </Stack>
          <Stack direction='row' spacing={2}>
            <IconButton
              sx={{
                bgcolor: "rgba(34, 34, 34, 1)",
                borderRadius: 2,
                padding: 2,
                width: 65,
                height: 65,
              }}
            >
              <Icon icon='ic:round-plus' color='white' />
            </IconButton>
            <Stack spacing={1}>
              <Typography variant='subtitle2'>Chat Profile</Typography>
              <Typography variant='subtitle2' sx={{ width: "35ch" }}>
                Sound supports.jpg, .png, and . gif files up to 10MB. Recommended size is 600 x
                600px
              </Typography>
            </Stack>
          </Stack>
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
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

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
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

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
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

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
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

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
              placeholder='Tiktok'
              inputProps={{ "aria-label": "Tiktok" }}
              sx={{
                bgcolor: "rgba(243, 243, 243, 1)",
                padding: "8px 10px",

                width: "100%",
              }}
            />
          </Paper>

          <Button
            variant='outlined'
            sx={{
              borderColor: "common.black",
              color: "common.black",
              width: { xs: "100%", sm: "50%", md: "25%" },
              ":hover": {
                bgcolor: "common.black",
                color: "orange",
              },
            }}
          >
            PAY OUT
          </Button>
        </Stack>
      </Stack>
    </ContentStyle>
  );
}
