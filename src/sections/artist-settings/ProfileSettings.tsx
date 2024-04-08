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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { User } from "assets";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { FileProps } from "@types";
import { makeRequest } from "../../utils/axios";
import { updatetUserFailure, updatetUserStart, updatetUserSuccess } from "../../redux/slice/UserSlice";
import Notification from "../../components/Notification";
import { useLocation, useNavigate } from "react-router-dom";

// components

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 0),
}));

export default function ProfileSettings() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state) => state.user.currentUser);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(user?.email);
  const [desc, setDesc] = useState(user?.desc);
  const [phone, setPhone] = useState(user?.phone);
  const [apple, setApple] = useState(user?.apple);
  const [tiktok, setTiktok] = useState(user?.tiktok);
  const [spotify, setSpotify] = useState(user?.spotify);
  const [twitter, setTwitter] = useState(user?.twitter);
  const [country, setCountry] = useState(user?.country);
  const [username, setUsername] = useState(user?.username);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [bannerImg, setBannerImg] = useState<File | null>();
  const [avatarImg, setAvatarImg] = useState<File | null>();
  const [instagram, setInstagram] = useState(user?.instagram);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [bannerUrl, setBannerUrl] = useState<string>("")
  const [file, setFile] = useState<FileProps>();
  const [chatprofileUrl, setChatprofileImgUrl] = useState<string>("");
  const [chatprofileImg, setChatprofileImg] = useState<File | null>();
  
  const uploadFile = (file: File, img: string) => {
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // setImg(downloadURL)
          // const product: FileProps = {[img]: downloadURL };
          setFile((prev) => ({...prev, [img]: downloadURL}))
        //   addProduct(product, dispatch);
        });
      }
    );
  };

  useEffect(() => {
    if(avatarImg) {
      setAvatarUrl(URL.createObjectURL(avatarImg))
      uploadFile(avatarImg, "avatarImg")
    }
  }, [avatarImg])

  useEffect(() => {
    if(bannerImg) {
      setBannerUrl(URL.createObjectURL(bannerImg))
      uploadFile(bannerImg, "bannerImg")
    }
  },[bannerImg])

  useEffect(() => {
    if(chatprofileImg) {
      setChatprofileImgUrl(URL.createObjectURL(chatprofileImg));
      uploadFile(chatprofileImg, "chatprofileImg");
    }
  }, [chatprofileImg])

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
    // setAvatarImg(e.target.files[0]);
    const input = {
      ...file, 
      username, 
      email, 
      birthday, 
      desc, 
      twitter, 
      phone, 
      country, 
      tiktok, 
      instagram, 
      apple, 
      spotify
    }
    dispatch(updatetUserStart())
    try {
      const res = await makeRequest.put(`/users/${user?._id}`, input);
      dispatch(updatetUserSuccess(res.data));
      setMessage("Successfully saved!");
      setShow(true)
    }catch(err: any) {
      if(err?.response.status === 401) {
        setMessage("Please login")
        navigate("/login", {state: {from: location }, replace: true})
      } else if (err.response.status === 403) {
        setMessage("Session expired!")
        navigate("/login", {state: {from: location}, replace: true})
      }
      dispatch(updatetUserFailure());
    }
  }

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
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
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
              name="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
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
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
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
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
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
              onClick={handleSubmit}
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
            <label htmlFor="avatar">
              {avatarUrl ? (
                <Avatar src={avatarUrl.toString()} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }} />
                ):(
                  <Avatar src={user?.avatarImg} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }} />
                )}
            </label>
            <input 
              type="file" 
              id="avatar"
              onChange={(e) => setAvatarImg(e.target.files?.[0])}
              hidden
            />
            <Stack spacing={1}>
              <Typography variant='subtitle2'>Avatar</Typography>
              <Typography variant='subtitle2' sx={{ width: "35ch" }}>
                Sound supports.jpg, .png, and . gif files up to 10MB. Recommended size is 600 x
                600px
              </Typography>
            in</Stack>
          </Stack>
          <Stack direction='row' spacing={2}>
            <label htmlFor="banner">
              { bannerUrl ? (
                <Avatar src={bannerUrl} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }}/>
              ): user?.bannerImg ? (
                <Avatar src={user?.bannerImg.toString()} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }}/>
              ): (
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
              )}
            </label>
            <input 
              type="file"
              id="banner"
              onChange={(e) => setBannerImg(e.target.files?.[0])}
              hidden
            />
            <Stack spacing={1}>
              <Typography variant='subtitle2'>Banner</Typography>
              <Typography variant='subtitle2' sx={{ width: "35ch" }}>
                Sound supports.jpg, .png, and . gif files up to 10MB. Recommended size is 600 x
                600px
              </Typography>
            i</Stack>
          </Stack>
          <Stack direction='row' spacing={2}>
            <label htmlFor="chatprofile">
              {chatprofileUrl ? (
              <Avatar src={chatprofileUrl.toString()} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }}/>
              ) : user?.chatprofileImg ? (
                <Avatar src={user?.chatprofileImg} alt='user avatar' sx={{ borderRadius: 1, width: 65, height: 65 }}/>
              ):(
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
              )}
            </label>
            <input 
              type="file"
              id="chatprofile"
              hidden
              onChange={(e) => setChatprofileImg(e.target.files?.[0])}
            />
            <Stack spacing={1}>
              <Typography variant='subtitle2'>Chat Profile</Typography>
              <Typography variant='subtitle2' sx={{ width: "35ch" }}>
                Sound supports.jpg, .png, and . gif files up to 10MB. Recommended size is 600 x
                600px
              </Typography>
            in</Stack>
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
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
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
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
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
              value={spotify}
              onChange={(e) => setSpotify(e.target.value)}
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
              value={apple}
              onChange={(e) => setApple(e.target.value)}
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
              value={tiktok}
              onChange={(e) => setTiktok(e.target.value)}
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
      <Notification message={message} show={show} setShow={setShow}/>
    </ContentStyle>
  );
}