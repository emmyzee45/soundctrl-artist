// @mui
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getFansSuccess } from "../redux/slice/FansSlice";
import { Benefits, HomeHero } from "sections/aritst-home";
import { makeRequest } from "../utils/axios";
// sections

// ---------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(248, 248, 248, 1)",
}));

export default function ArtistHome() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getFans = async() => {
      try {
        const res = await makeRequest.get("/users/fans");
        dispatch(getFansSuccess(res.data));
      }catch(err) {
        console.log(err);
      }
    }
    getFans();
  }, [])

  return (
    <RootStyle>
      <HomeHero />
      <Benefits />
    </RootStyle>
  );
}
