import { Button, Stack, Typography } from "@mui/material";
import SectionContainer from "layouts/main/SectionContainer";
import { useContext, useEffect } from "react";
import { secondaryButtonStyles } from "utils/cssStyles";
import { useNavigate } from "react-router-dom";

import successIcon from "assets/images/Successmark.png";

export default function Success() {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
  };


  return (
    <SectionContainer>
      <Stack
        direction='column'
        alignItems='center'
        spacing={2}
        style={{ position: "relative", textAlign: "center" }}
      >
        <img src={successIcon} alt='Success Icon' style={{ width: "100px", height: "100px" }} />
        <Typography variant='h2' sx={{ color: "common.black" }}>
          Password Changed!
        </Typography>
      </Stack>

      <Typography variant='subtitle1' sx={{ color: "#96989D", textAlign: "center" }}>
        Your password has been changed successfully.
      </Typography>

      <Stack justifyContent='center' marginInline='auto' width={{ md: "30%" }}>
        <Stack spacing={2} marginBlock={5}>
          <Button
            variant='contained'
            size='large'
            sx={secondaryButtonStyles}
            onClick={handleBackToLogin}
          >
            Back to Login
          </Button>
        </Stack>
      </Stack>
    </SectionContainer>
  );
}
