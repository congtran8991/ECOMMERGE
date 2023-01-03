/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, Flex } from "@chakra-ui/react";
export default function CouponItem() {
  return (
    <Box p={2}>
      <Flex>
        <Image
          p={1}
          border={"1px"}
          borderColor={"var(--clr-gray-third)"}
          minW={"6rem"}
          minH={"6rem"}
          width={"6rem"}
          height={"6rem"}
          src="https://i.pinimg.com/736x/c1/4d/43/c14d431d0bfafb92d3900bbc38284e26.jpg"
        />

        <Box pl={3}>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            height={"100%"}
          >
            <Box>
              <Box className="text-title">Giảm 777swcK</Box>
              <Box mt={1} className="text-label">
                Số lượng có hạnds
              </Box>
            </Box>
            <Box mt={2} className="text-label">
              HSD: 31/12/22
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
