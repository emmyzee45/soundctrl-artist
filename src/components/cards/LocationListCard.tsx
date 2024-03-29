import { Stack, Typography } from "@mui/material";

export default function LocationListCard({ city, fans }: { city: string; fans: string }) {
  return (
    <Stack>
      <Typography variant='subtitle1' sx={{ color: "common.black" }}>
        {city}
      </Typography>
      <Typography variant='subtitle2' sx={{ color: "grey.800" }}>
        {fans} fans in this city
      </Typography>
    </Stack>
  );
}
