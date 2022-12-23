import {
  Flex,
  Box,
} from "@chakra-ui/react";
import Picture from "components/detailProduct/Picture";
import InformationProduct from "components/detailProduct/Information";
import Detail from "components/detailProduct/Detail";
import DescriptionProduct from "components/detailProduct/Description";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function DetailProduct() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="mt-3 mb-3 text-gray-400">Breadcum</div>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        className="bg-zinc-50 rounded"
      >
        <Flex
          className="p-5"
          gap={2}
          direction={["column", "column", "column", "row"]}
        >
          <Picture />
          <InformationProduct />
        </Flex>
      </Box>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        className="mt-5 bg-zinc-50 rounded"
      >
        <Detail />
      </Box>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        className="mt-5 bg-zinc-50 rounded"
      >
        <DescriptionProduct />
      </Box>
    </div>
  );
}
