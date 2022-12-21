import {
  Grid,
  GridItem,
  Flex,
  Box,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import Picture from "../../component/detailProduct/picture";
import InformationProduct from "../../component/detailProduct/information";
import Detail from "../../component/detailProduct/detail";
import DescriptionProduct from "../../component/detailProduct/description";
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
        className="mt-5 bg-zinc-50 rounded Chi tiết sản phẩm"
      >
        <Detail />
      </Box>
      <Box
        boxShadow={"0px 1px 1px 0px rgb(0 0 0 / 5%)"}
        className="mt-5 bg-zinc-50 rounded Chi tiết sản phẩm"
      >
        <DescriptionProduct />
      </Box>
    </div>
  );
}
