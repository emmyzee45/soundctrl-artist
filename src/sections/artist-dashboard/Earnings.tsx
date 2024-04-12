// @mui
import { Box, Button, Grid, Stack, Typography, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "components/Image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Payout } from "assets";
import { makeRequest } from "utils/axios";
import { loadStripe, Stripe, StripeElementsOptions, Appearance } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import "./Earning.css"

const stripeKey: string = process.env.REACT_APP_STRIPE_KEY || '';

const stripePromise: Promise<Stripe | null> = loadStripe(stripeKey)
console.log(process.env.REACT_APP_STRIPE_KEY)

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
  const [totalEarning, setTotalEarning] = useState<number>(0);
  const [bookingEarning, setBookingEarning] = useState<number>(0);
  const [subscriptionEarning, setSubscriptionEarning] = useState<number>(0);
  const [value, setValue] = useState(0);
  const [clientSecret, setClientSecret] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const appearance: Appearance = {
    theme: "stripe",
  }
  const options: StripeElementsOptions = {
    clientSecret: clientSecret || undefined,
    appearance,
  };

  useEffect(() => {
    const getOrders = async() => {
      try {
        const res = await makeRequest.get("/orders");
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
  },[])

  useEffect(() => {
    const getSubscriptionEarning = async() => {
      try {
        const res = await makeRequest.get("/orders/subscription");
        setSubscriptionEarning(res.data);
      }catch(err) {
        console.log(err);
      }
    }
    getSubscriptionEarning();
  },[])

  useEffect(() => {
    const getBookingEarning = async() => {
      try {
        const res = await makeRequest.get("/orders/booking");
        setBookingEarning(res.data)
      }catch(err) {
        console.log(err);
      }
    }
    getBookingEarning();
  },[])

  useEffect(() => {
    const createPaymentIntent = async() => {
      try {
        const res = await makeRequest.post(`/orders/create-payment-intent`);
        console.log(res.data)
        setClientSecret(res.data.clientSecret)
      }catch(err) {
        console.log(err)
      }
    }
    createPaymentIntent();
  },[])

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
          {/* <Image src={Payout} alt='payout' /> */}
          {clientSecret ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckOutForm />
            </Elements>
          ): (
            <button>Pay Out</button>
          )}
        </CustomTabPanel>
      </Box>
    </ContentStyle>
  );
}
