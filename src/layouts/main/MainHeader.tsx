import { useLocation, Link } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
// utils
import cssStyles from "../../utils/cssStyles";
// config
import { HEADER } from "../../config";
// components
import { Logo } from "../../assets/";
import Image from "../../components/Image";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userRequest } from "../../utils/axios";
import { logoutUserFailure, logoutUserStart, logoutUserSuccess } from "../../redux/slice/UserSlice";

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  // boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const dispatch = useAppDispatch();
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "md");

  const isHome = pathname === "/";

  const handleLogout = async(e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logoutUserStart())
    try {
      await userRequest.post("/auth/logout");
      dispatch(logoutUserSuccess())
    }catch(err) {
      dispatch(logoutUserFailure())
    }
  }

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to='/' style={{ textDecoration: "none" }}>
            <img src={Logo} alt='logo' />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
          {!isAuthenticated ? (

            <Link to='/login' style={{ textDecoration: "none" }}>
            <Button variant='text' sx={{ color: "grey.700" }}>
              LOG IN
            </Button>
          </Link>
          ):(
            <Button variant='text' sx={{ color: "grey.700" }} onClick={handleLogout}>
              LOG OUT
            </Button>
          )}

          {/* {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
