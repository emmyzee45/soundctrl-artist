import React from "react";
import { styled } from "@mui/material/styles";

type ContainerProps = {
  children: React.ReactNode;
};

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  overflow: "hidden",
  padding: theme.spacing(10, 10),
  backgroundColor: "common.white",
}));

const SectionContainer = ({ children }: ContainerProps) => {
  return <ContentStyle>{children}</ContentStyle>;
};

export default SectionContainer;
