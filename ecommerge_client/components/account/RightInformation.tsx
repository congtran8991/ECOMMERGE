import { Box, Flex, Button } from "@chakra-ui/react";
import CustomButton from "basicComponents/CustomButton";
export default function RightInformation() {
  return (
    <Box mb={3} width={"40%"}>
      <Box>
        <Box className="text-title" mb={3}>
          Số điện thoại và Email
        </Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box className="text-label">
            <Box>Số điện thoại</Box>
            <Box>0862526477</Box>
          </Box>
          <Box>
            <CustomButton text="Cập nhật" typeButton={1} />
          </Box>
        </Flex>
        <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
          <Box className="text-label">
            <Box>Địa chỉ email</Box>
            <Box>Congtran8991@gmail.com</Box>
          </Box>
          <Box>
            <CustomButton text="Cập nhật" typeButton={1} />
          </Box>
        </Flex>
      </Box>
      <Box mt={16}>
        <Box className="text-title" mb={3}>
          Bảo mật
        </Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box className="text-label">
            <Box>Đổi mật khẩu</Box>
          </Box>
          <Box>
            <CustomButton text="Cập nhật" typeButton={1} />
          </Box>
        </Flex>
        <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
          <Box className="text-label">
            <Box>Thiết lập mã pin</Box>
          </Box>
          <Box>
            <CustomButton text="Cập nhật" typeButton={1} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
