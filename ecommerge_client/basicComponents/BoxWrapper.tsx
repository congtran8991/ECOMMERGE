import React from "react";
import { Box } from "@chakra-ui/react";

const theme = {
  color: {
    grayPrimary: "var(--clr-gray-primary)",
    grayThird: "var(--clr-gray-third)",
  },
};

interface props {
  children: JSX.Element;
}
export default function BoxWrapper(props: props) {
  const { children } = props;
  return (
    <Box
      boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
      mt={5}
      bg={"var(--clr-white-second)"}
      border={"1px"}
      borderColor={theme.color.grayThird}
      px={4}
    >
      {children}
    </Box>
  );
}
