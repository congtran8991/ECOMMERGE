import { Flex, Box } from "@chakra-ui/react";
import Picture from "components/detailProduct/Picture";
import InformationProduct from "components/detailProduct/Information";
import Detail from "components/detailProduct/Detail";
import DescriptionProduct from "components/detailProduct/Description";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function DetailProduct() {
  return (
    <Box width={"80%"} marginX={"auto"}>
      <Box mt={3} mb={3}>Breadcum</Box>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        bg={"var(--clr-gray-primary)"}
      >
        <Flex
          p={5}
          gap={2}
          direction={["column", "column", "column", "row"]}
          border={"1px solid var(--clr-gray-third)"}
        >
          <Picture />
          <InformationProduct />
        </Flex>
      </Box>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        mt={5}
        bg={"var(--clr-gray-primary)"}
        border={"1px solid var(--clr-gray-third)"}
      >
        <Detail />
      </Box>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        border={"1px solid var(--clr-gray-third)"}
        bg={"var(--clr-gray-primary)"}
        mt={5}
      >
        <DescriptionProduct />
      </Box>
    </Box>
  );
}
