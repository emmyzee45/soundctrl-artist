import { Box, Button, Stack, Typography } from "@mui/material";
import { TicketOne } from "assets";
import Image from "components/Image";

export default function TicketCard({}) {
  return (
    <Box sx={{ bgcolor: "common.white", borderRadius: 2, marginBlock: 2 }}>
      <Image src={TicketOne} alt='ticket image' />
      <Stack spacing={1} sx={{ padding: 2, bgcolor: "common.white", borderRadius: 5 }}>
        <Typography variant='h5'>Tea time with XXX</Typography>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='subtitle2'>30mins</Typography>
          <Typography variant='subtitle2'>0.04ETH $75.09</Typography>
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
          Buy
        </Button>
      </Stack>
    </Box>
  );
}
