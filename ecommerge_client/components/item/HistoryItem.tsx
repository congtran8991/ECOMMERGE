/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, Flex, Divider } from "@chakra-ui/react";
export default function HistoryItem() {
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
          <Box fontSize={16}>
            Kính cường lực kinhkong full màn Kính cường lực kinhkong full màn
            Kính cường lực kinhkong full màn Kính cường lực kinhkong full màn
            Kính cường lực kinhkong full màn Kính cường lực kinhkong full màn
          </Box>
          <Box mt={2} className="text-label">
            Phân loại sản phẩm
          </Box>
          <Box mt={2} className="text-label">
            Số lượng
          </Box>
        </Box>
      </Flex>
      <Divider my={3}/>
    </Box>
  );
}
