import { Box, Grid, GridItem, Flex, Image } from "@chakra-ui/react";
import BoxWrapper from "basicComponents/BoxWrapper";
import CouponItem from "components/item/CouponItem";

export default function Coupons() {
  return (
    <Box width={"100%"}>
      <Box mb={2} className="text-page">Mã giảm giá</Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <BoxWrapper>
          <CouponItem />
        </BoxWrapper>
        <BoxWrapper>
          <CouponItem />
        </BoxWrapper>
        <BoxWrapper>
          <CouponItem />
        </BoxWrapper>
      </Grid>
    </Box>
  );
}
