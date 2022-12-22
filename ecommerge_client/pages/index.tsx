import { Box } from "@chakra-ui/react";
import HomeCarousel from "components/HomeCarousel";
import ListProduct from "components/ListProduct";
import ListCategory from "components/ListCategory";

export default function Home() {
  return (
    <Box>
      <HomeCarousel />
      <Box paddingX={3}>
        <ListCategory />
        <ListProduct />
      </Box>
    </Box>
  );
}
