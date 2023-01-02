import React from "react";
import { Box } from "@chakra-ui/react";

const theme = {
  color: {
    grayPrimary: "var(--clr-gray-primary)",
    grayThird: "var(--clr-gray-third)",
  },
};

interface propsType {
  children: JSX.Element;
  width: any;
  height: any;
  mt: any;
  mb: any;
}
export default function BoxWrapper(props: Partial<propsType>) {
  const { children, width, height, mt, mb} = props;
  return (
    <Box
      borderRadius={10}
      height={height}
      width={width}
      boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
      bg={"var(--clr-white-second)"}
      border={"1px"}
      borderColor={theme.color.grayThird}
      p={2}
      mb={mb}
      mt={mt}
    >
      {children}
    </Box>
  );
}
