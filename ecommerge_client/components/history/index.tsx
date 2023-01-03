import { Box, Flex } from "@chakra-ui/react";
import HistoryItem from "components/item/HistoryItem";

import BoxWrapper from "basicComponents/BoxWrapper";

export default function History() {
  return (
    <Box>
      <Box mb={2} className="text-page">Thông tin thanh toán</Box>
      <BoxWrapper>
        <Box>
          <BoxWrapper mb={2}>
            <Box p={2}>
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
              <Flex my={5} justifyContent={"end"}>
                <Box>Thành tiền</Box>
                <Box ml={3}>500.0000 đ</Box>
              </Flex>
            </Box>
          </BoxWrapper>
          <BoxWrapper mb={2}>
            <Box p={2}>
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
              <Flex my={5} justifyContent={"end"}>
                <Box>Thành tiền</Box>
                <Box ml={3}>500.000 đ</Box>
              </Flex>
            </Box>
          </BoxWrapper>
          <BoxWrapper mb={2}>
            <Box p={2}>
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
              <Flex my={5} justifyContent={"end"}>
                <Box>Thành tiền</Box>
                <Box ml={3}>500.000 đ</Box>
              </Flex>
            </Box>
          </BoxWrapper>
        </Box>
      </BoxWrapper>
    </Box>
  );
}
