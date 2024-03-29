// @mui
import { Typography, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { ProfileSettings, Notifications } from "sections/artist-settings";

// sections

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(10, 10),
  backgroundColor: theme.palette.background.default,
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function ArtistSettings() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <RootStyle>
      <Typography
        variant='h3'
        sx={{
          textTransform: "uppercase",
          color: "common.black",
          fontFamily: "Dela Gothic One, cursive",
        }}
      >
        Settings
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='settings tab'
          TabIndicatorProps={{
            style: {
              backgroundColor: "rgba(253, 147, 76, .8)",
              height: "1rem",
              marginBottom: ".5rem",
            },
          }}
        >
          <Tab label='Profile' {...a11yProps(0)} />
          <Tab label='Notifications' {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <ProfileSettings />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Notifications />
        </CustomTabPanel>
      </Box>
    </RootStyle>
  );
}
