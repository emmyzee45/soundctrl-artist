export type ArtistCardType = {
  image: string;
  avatar: string;
  name: string;
  handle: string;
};

<<<<<<< HEAD
export type UserProps = {
  username?: string, 
  email?: string,
  password?: string,
  confirmPassword?: string,
}

export interface UserProp {
  username?: string,
  email?: string,
  password?: string,
  avatarImg?: string,
  bannerImg?: string,
  chatprofileImg?: string,
  createdAt?: string,
  _id: string,
  isArtist?: boolean,
  subscribedUsers?: string[],
  desc?: string,
  twitter?: string,
  instagram?: string,
  country?: string,
  tiktok?: string,
  birthday?: string,
  phone?: string,
  spotify?: string,
  points?: number,
  address?: string,
  apple?: string,
};

export type FileProps = {
  avatarImg?: string,
  bannerImg?: string,
  chatprofileImg?: string
}

export interface userState {
  currentUser: UserProp | null,
  isAuthenticated: boolean,
  isLoading: boolean,
  error: boolean
}

export interface FansProps extends UserProp {
  subscribedUsers: any[],
}

=======
>>>>>>> 907b60ac692199d52a0dfdb2db536c01a786ca99
export type ArtistCommunityCardType = {
  image: string;
  name: string;
  handle: string;
};

export type FansCardType = {
  avatar: string;
  handle: string;
  count: string;
  fandom: string;
};

export type TicketType = {
  title: string;
  image: string;
  time: string;
  price: string;
};

export type ArtistFanCardType = {
  avatar: string;
  name: string;
  points: string;
  date: string;
};
