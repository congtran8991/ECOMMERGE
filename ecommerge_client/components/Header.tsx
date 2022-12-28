import { Box } from "@chakra-ui/react";
import LeftHeader from "./header/LeftHeader";
import CenterHeader from "./header/CenterHeader";
import RightHeader from "./header/RightHeader";
import PageWrapper from "../basicComponents/PageWrapper";

export default function Header() {
  return (
    <Box bg={"var(--clr-green-primary)"}>
      <PageWrapper height={24} display={"flex"} alignItems={"center"}>
        <LeftHeader />
        <CenterHeader />
        <RightHeader />
      </PageWrapper>
    </Box>
  );
}
