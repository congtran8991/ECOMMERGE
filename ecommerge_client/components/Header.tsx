import { Box } from "@chakra-ui/react";
import LeftHeader from "./header/LeftHeader";
import CenterHeader from "./header/CenterHeader";
import RightHeader from "./header/RightHeader";

export default function Header() {
  return (
    <Box bg={"var(--clr-green-primary)"}>
      <Box display={"flex"} alignItems={"center"}  width={"80%"} marginX={"auto"} height={24}>
        <LeftHeader />
        <CenterHeader />
        <RightHeader />
      </Box>
    </Box>
  );
}
