import {
  TicketType,
  FansCardType,
  ArtistCommunityCardType,
  ArtistCardType,
  ArtistFanCardType,
} from "@types";
import {
  TicketOne,
  TicketThree,
  TicketTwo,
  UserAvatar,
  UserAvatarEight,
  UserAvatarFive,
  UserAvatarFour,
  UserAvatarSeven,
  UserAvatarSix,
  UserAvatarThree,
  UserAvatarTwo,
  ArtistCommunityFive,
  ArtistCommunityFour,
  ArtistCommunityOne,
  ArtistCommunitySix,
  ArtistCommunityThree,
  ArtistCommunityTwo,
  UserImage,
  UserImageFive,
  UserImageFour,
  UserImageSix,
  UserImageThree,
  UserImageTwo,
} from "assets";

export const tickets: TicketType[] = [
  {
    title: "Tea with XXX",
    image: TicketOne,
    time: "30 mins",
    price: "0.04ETH $75.09",
  },
  {
    title: "Tea with XXX",
    image: TicketTwo,
    time: "30 mins",
    price: "0.04ETH $75.09",
  },
  {
    title: "Tea with XXX",
    image: TicketThree,
    time: "30 mins",
    price: "0.04ETH $75.09",
  },
  {
    title: "Tea with XXX",
    image: TicketOne,
    time: "30 mins",
    price: "0.04ETH $75.09",
  },
];

export const FANCARDS: FansCardType[] = [
  { avatar: UserAvatar, handle: "@Pandawatch", count: "1,000,000", fandom: "@Ice Spice Fandom" },
  { avatar: UserAvatarTwo, handle: "@Pandawatch", count: "1,000,000", fandom: "@Ice Spice Fandom" },
  {
    avatar: UserAvatarThree,
    handle: "@Pandawatch",
    count: "1,000,000",
    fandom: "@Ice Spice Fandom",
  },
  {
    avatar: UserAvatarFour,
    handle: "@Pandawatch",
    count: "1,000,000",
    fandom: "@Ice Spice Fandom",
  },
  {
    avatar: UserAvatarFive,
    handle: "@Pandawatch",
    count: "1,000,000",
    fandom: "@Ice Spice Fandom",
  },
  { avatar: UserAvatarSix, handle: "@Pandawatch", count: "1,000,000", fandom: "@Ice Spice Fandom" },
  {
    avatar: UserAvatarSeven,
    handle: "@Pandawatch",
    count: "1,000,000",
    fandom: "@Ice Spice Fandom",
  },
  {
    avatar: UserAvatarEight,
    handle: "@Pandawatch",
    count: "1,000,000",
    fandom: "@Ice Spice Fandom",
  },
];
export const ARTISTFANCARDS: ArtistFanCardType[] = [
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
  { avatar: UserAvatar, name: "User name", points: "1500", date: "Join since 09,2023" },
];

export const COMMUNITYCARDS: ArtistCommunityCardType[] = [
  {
    image: ArtistCommunityOne,
    name: "Ice Spice",
    handle: "Spice Beats",
  },
  {
    image: ArtistCommunityTwo,
    name: "Joyce Wrice",
    handle: "Buck Roll",
  },
  {
    image: ArtistCommunityThree,
    name: "FKJ",
    handle: "Spice Beats",
  },
  {
    image: ArtistCommunityFour,
    name: "METRO BOOMIN",
    handle: "Spice Beats",
  },
  {
    image: ArtistCommunityFive,
    name: "jvce",
    handle: "Spice Beats",
  },
  {
    image: ArtistCommunitySix,
    name: "Dominic Fike",
    handle: "Spice Beats",
  },
];

export const CARDS: ArtistCardType[] = [
  {
    image: UserImage,
    avatar: UserAvatar,
    name: "Lil Yachy",
    handle: "@Pandawatch",
  },
  {
    image: UserImageTwo,
    avatar: UserAvatar,
    name: "Lil Yachy",
    handle: "@Pandawatch",
  },
  {
    image: UserImageThree,
    avatar: UserAvatar,
    name: "Lil Yachy",
    handle: "@Pandawatch",
  },
  {
    image: UserImageFour,
    avatar: UserAvatar,
    name: "Lil Yachy",
    handle: "@Pandawatch",
  },
  {
    image: UserImageFive,
    avatar: UserAvatar,
    name: "Lil Yachy",
    handle: "@Pandawatch",
  },
  {
    image: UserImageSix,
    avatar: UserAvatar,
    name: "Lil Yachy",
    handle: "@Pandawatch",
  },
];
