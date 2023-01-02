import {
  Box,
  Divider,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import BoxWrapper from "basicComponents/BoxWrapper";
export default function RightCart() {
  return (
    <BoxWrapper width={["100%", "100%", "100%", "25%"]}>
      <Box px={2}>
        <Box
          color={"var(--clr-green-primary)"}
          cursor={"pointer"}
          py={2}
          className="text-label"
        >
          Nhập hoặc chọn mã khuyến mãi{" "}
        </Box>
        <Divider />
        <Box mt={3}>
          <Flex mb={3} alignItems={"center"} justifyContent={"space-between"}>
            <Text className="text-label">Tạm tính</Text>
            <Box className="text-title">0đ</Box>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text className="text-label">Giảm giá</Text>
            <Box className="text-title">0đ</Box>
          </Flex>
          <Divider mt={8} />
          <Flex mt={3} alignItems={"start"} justifyContent={"space-between"}>
            <Text className="text-label">Tổng tiền</Text>
            <Box className="">
              <Text color={"red"} textAlign={"right"} className="text-title">
                300.000 đ
              </Text>
              <Text className="text-label">(Đã bao gồm VAT nếu có)</Text>
            </Box>
          </Flex>
          <Box mt={10} mb={3}>
            <Button
              _hover={{ bg: "var(--clr-green-primary)" }}
              borderRadius={0}
              width={"100%"}
              bg={"var(--clr-green-primary)"}
              color={"var(--clr-white)"}
              textTransform={"uppercase"}
            >
              Mua hàng
            </Button>
          </Box>
        </Box>
      </Box>
    </BoxWrapper>
  );
}
