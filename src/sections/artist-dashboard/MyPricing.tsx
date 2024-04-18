import { useState } from "react";
import { Box, Button, Stack, Typography, TextField, useMediaQuery, Theme } from "@mui/material";
import { TicketOne } from "assets";
import Image from "components/Image";

export default function MyPricing() {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [price, setPrice] = useState("");
  const [isTextFieldDisabled, setIsTextFieldDisabled] = useState(false);

  const handleConfirm = () => {
    // Emmy your logic here to handle confirmation
    // For now, I will just change the button text to "Change" to match the UI
    setPrice(price);
    setIsTextFieldDisabled(true);
    setButtonText("Change"); 
  };

  const handleChange = () => {
    setIsTextFieldDisabled(false);
    setButtonText("Confirm"); 
  };

  const [buttonText, setButtonText] = useState("Confirm");

  return (
    <Box sx={{ bgcolor: "common.white", borderRadius: 2, mb: 2 }}>
      <Image src={TicketOne} alt='ticket image' />
      <Stack spacing={1} sx={{ padding: 2, bgcolor: "common.white", borderRadius: 5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          My time ticket
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#FD934C" }}>
          You can price your own time here.
        </Typography>
        <Stack direction={isSmallScreen ? "column" : "row"} alignItems={isSmallScreen ? "stretch" : "center"} spacing={1}>
          <TextField
            label="Pricing"
            variant="outlined"
            size="small"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={isTextFieldDisabled} 
            sx={{ width: isSmallScreen ? "100%" : "auto" }}
          />
          <Button
            variant='contained'
            onClick={isTextFieldDisabled ? handleChange : handleConfirm}
            sx={{
              width: isSmallScreen ? "100%" : "auto",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#FD934C",
              },
              marginTop: isSmallScreen ? "16px" : 0,
            }}
          >
            {buttonText}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
