// @mui
import { Box, Button, Grid, Stack, Typography, Tab, Tabs, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "components/Image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Payout } from "assets";
import { loadStripe, Stripe, StripeElementsOptions, Appearance } from "@stripe/stripe-js";
import { useAppSelector } from "../../redux/hooks";
import axios from "axios";
// import CheckOutForm from "./CheckOutForm";
// import "./Earning.css"

const stripeKey: string = process.env.REACT_APP_STRIPE_KEY || '';

const stripePromise: Promise<Stripe | null> = loadStripe(stripeKey)

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(5, 5),
  backgroundColor: "rgba(248, 248, 248, 1)",
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

export default function Earnings() {
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState("");
  const [loginUrl, setLoginUrl] = useState<string>("");
  const [pendingBalance, setPendingBalance] = useState<number>(0);
  const [availableBalance, setAvailableBalance] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [clientSecret, setClientSecret] = useState("");
  const [totalEarning, setTotalEarning] = useState<number | undefined>(0);
  const [bookingEarning, setBookingEarning] = useState<number | undefined>(0);
  const [subscriptionEarning, setSubscriptionEarning] = useState<number | undefined>(0);

  const user = useAppSelector((state) => state.user.currentUser);

  // const bookings = user?.earnings?.bookings;
  // const subscriptions = user?.earnings?.subscriptions;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const appearance: Appearance = {
    theme: "stripe",
  }

  useEffect(() => {
    if(user) {
      setBookingEarning(user?.earnings?.bookings);
      setSubscriptionEarning(user?.earnings?.subscriptions);
      setTotalEarning(user?.earnings?.total);
    }
  }, [user])


  useEffect(() => {
    const getOrders = async() => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/orders`);
        let total = 0;
        res.data.map((item: any) => {
          total += item.price;
        })
        setTotalEarning(total);
      }catch(err) {
        console.log(err);
      }
    }
    getOrders();
  },[]);

  useEffect(() => {
    const getAccountDetails = async() => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/stripe`);
        setAvailableBalance(res.data.balanceAvailable);
        setPendingBalance(res.data.balancePending)
        setLoginUrl(res.data.login_url);
        setCurrency(res.data.balanceCurrency);
      }catch(err) {
        console.log(err);
      }
    }
    getAccountDetails();
  },[]);

  useEffect(() => {
    const getSubscriptionEarning = async() => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/orders/subscription`);
        setSubscriptionEarning(res.data);
      }catch(err) {
      }
    }
    getSubscriptionEarning();
  },[])

  useEffect(() => {
    const getBookingEarning = async() => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/orders/booking`);
        setBookingEarning(res.data)
      }catch(err) {
      }
    }
    getBookingEarning();
  },[])


  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/orders/transfer`, {amount, artist_id: user?._id});
      
    }catch(err) {
      console.log(err);
    }

  }

  const connectStripe = (url: string) => {
    window.location.href = url;
  }

  const handleStripeConnect = async() => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/stripe`);
      res.status === 200 && connectStripe(res.data);
    }catch(err) {
      console.log(err)
    }
  };

  const handlePayout = async() => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/stripe/payout`);
      res.status === 200 && setAvailableBalance(0);
    }catch(err){
      console.log(err);
    }
  }

  const handleCharges = async() => {
    try{
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/stripe/${user?._id}`);
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <ContentStyle>
      <Typography
        variant='h4'
        sx={{
          textTransform: "uppercase",
          color: "common.black",
          fontFamily: "Dela Gothic One, cursive",
        }}
      >
        EARNING
      </Typography>
      <Stack direction='row' spacing={3} my={5} alignItems='center'>
        <Box
          sx={{
            bgcolor: "common.white",
            padding: 4,
            borderRadius: 1,
            height: 100,
            width: 100,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Icon icon='teenyicons:message-outline' height={30} width={30} />
        </Box>
        <Typography variant='subtitle1' sx={{ color: "common.black" }}>
          One of the best ways to increase your earning numbers is by connecting with your fans. Get
          started by sending them facetiming with them, sharing links to your new tracks, or
          replying to comments in you SuperChat
        </Typography>
      </Stack>
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
          <Tab label='Total Earning' {...a11yProps(0)} />
          <Tab label='Pay Out' {...a11yProps(1)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <Stack spacing={5} sx={{ px: 2 }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ bgcolor: "common.white", borderRadius: 1, padding: 6 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <Icon icon='cil:dollar' height={30} width={30} />
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Total Earnings On SOUNDCTRL
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Amount:
                </Typography>
                <Typography variant='subtitle1'>${totalEarning}</Typography>
              </Stack>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ bgcolor: "common.white", borderRadius: 1, padding: 6 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <Icon icon='cil:dollar' height={30} width={30} />
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Earning Made From Subscriptions
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Amount: 
                </Typography>
                <Typography variant='subtitle1'>${subscriptionEarning}</Typography>
              </Stack>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ bgcolor: "common.white", borderRadius: 1, padding: 6 }}
            >
              <Stack direction='row' spacing={1} alignItems='center'>
                <Icon icon='cil:dollar' height={30} width={30} />
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Earning From One On One Bookings
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Amount:
                </Typography>
                <Typography variant='subtitle1'>${bookingEarning}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
           <Stack spacing={5} sx={{ px: 2 }}>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ bgcolor: "common.white", borderRadius: 1, padding: 6 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <Icon icon='cil:dollar' height={30} width={30} />
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Available Balance On SOUNDCTRL
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Amount:
                </Typography>
                <Typography variant='subtitle1'>{currency}{availableBalance}</Typography>
              </Stack>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ bgcolor: "common.white", borderRadius: 1, padding: 6 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <Icon icon='cil:dollar' height={30} width={30} />
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Pending Balance On SOUNDCTRL
                </Typography>
              </Stack>
              <Stack direction='row' spacing={1}>
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  Amount:
                </Typography>
                <Typography variant='subtitle1'>{currency}{pendingBalance}</Typography>
              </Stack>
            </Stack>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ bgcolor: "common.white", borderRadius: 1, padding: 6 }}
            >
              <Stack direction='row' alignItems='center' spacing={1}>
                <Icon icon='cil:dollar' height={30} width={30} />
                <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
                  <a href={loginUrl} target="_blank" rel="noreferrer">
                    View account details
                  </a>
                  {/* <Button onClick={handleCharges}>Generate Charges</Button> */}
                </Typography>
              </Stack>
              <Stack direction='row' spacing={2}>
                 {user?.onboarding_complete ? (
                  <Button
                  variant='outlined'
                  onClick={handlePayout}
                  disabled={!availableBalance}
                  sx={{
                    borderColor: "common.black",
                    color: `${!availableBalance ? "common.gray":"common.black"}`,
                    width: { xs: "100%", sm: "100%", md: "100%" },
                    ":hover": {
                      bgcolor: "common.black",
                      color: "orange",
                    },
                  }}
                  >
                  PAY OUT
                </Button>
                ): (
                  <Button
                  variant='outlined'
                  onClick={handleStripeConnect}
                  sx={{
                    borderColor: "common.black",
                    color: "common.black",
                    width: { xs: "100%", sm: "50%", md: "100%" },
                    ":hover": {
                      bgcolor: "common.black",
                      color: "orange",
                    },
                  }}
                  >
                  CONNECT ACCOUNT
                </Button>
                )}
              </Stack>
            </Stack>
            </Stack>
         
        </CustomTabPanel>
      </Box>
    </ContentStyle>
  );
}
