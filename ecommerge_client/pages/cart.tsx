/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Flex
} from "@chakra-ui/react";
import PageWrapper from "basicComponents/PageWrapper";

import LeftCart from "components/cart/LeftCart";
import RightCart from "components/cart/RightCart";

export default function Cart() {
  return (
    <PageWrapper>
      <Box className="text-page">Thông tin giỏ hàng</Box>
      <Flex gap={3}>
        <LeftCart />
       <RightCart />
      </Flex>
    </PageWrapper>
  );
}
