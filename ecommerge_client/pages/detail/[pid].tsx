import { Flex, Box } from "@chakra-ui/react";
import Picture from "components/detailProduct/Picture";
import InformationProduct from "components/detailProduct/Information";
import Detail from "components/detailProduct/Detail";
import DescriptionProduct from "components/detailProduct/Description";
import BoxWrapper from "basicComponents/BoxWrapper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function DetailProduct() {
  return (
    <Box width={"80%"} marginX={"auto"}>
      <Box mt={3} mb={3}>
        Breadcum
      </Box>
      <BoxWrapper mb={2}>
        <Flex p={5} gap={2} direction={["column", "column", "column", "row"]}>
          <Picture />
          <InformationProduct />
        </Flex>
      </BoxWrapper>
      <BoxWrapper mb={2}>
        <Detail />
      </BoxWrapper>
      <BoxWrapper>
        <DescriptionProduct />
      </BoxWrapper>
    </Box>
  );
}
