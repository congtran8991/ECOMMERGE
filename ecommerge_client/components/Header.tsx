import { Box } from "@chakra-ui/react"
import LeftHeader from "./header/LeftHeader";
import CenterHeader from "./header/CenterHeader";
import RightHeader from "./header/RightHeader";

export default function Home() {
  return (
    <Box className="header bg-dashboard">
        <Box className="w-4/5 mx-auto header-wrapper h-24 flex items-center">
            <LeftHeader/>
            <CenterHeader/>
            <RightHeader/>
        </Box>
    </Box>
  );
}
