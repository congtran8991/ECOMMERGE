import React from "react";
import { Box } from "@chakra-ui/react";

const theme = {
  color: {
    grayPrimary: "var(--clr-gray-primary)",
    grayThird: "var(--clr-gray-third)",
  },
};

interface PropsType {
  children: JSX.Element;
  width: string | number;
  height: string | number;
  mt: string | number;
  mb: string | number;
}
export default function BoxWrapper(props: Partial<PropsType>) {
  const { children, width, height, mt, mb } = props;
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
