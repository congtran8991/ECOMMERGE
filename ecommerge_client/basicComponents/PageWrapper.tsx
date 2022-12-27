import React from "react";
import { Box } from "@chakra-ui/react";

const theme = {
  color: {
    grayPrimary: "var(--clr-gray-primary)",
    grayThird: "var(--clr-gray-third)",
  },
};

export default function PageWrapper(props: any) {
  const { children } = props;
  return (
    <Box
      padding={3}
      width={["100%", "100%", "100%", "100%", "100%", "80%"]}
      marginX={"auto"}
      {...props}
    >
      {children}
    </Box>
  );
}
