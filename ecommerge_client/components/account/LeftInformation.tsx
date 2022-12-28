import {
  Box,
  Flex,
  Avatar,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from "@chakra-ui/react";
import CustomButton from "basicComponents/CustomButton";
export default function LeftInformation() {
  return (
    <Box width={"60%"}>
      <Box className="text-title" mb={3}>
        Thông tin cá nhân
      </Box>
      <Flex gap={5}>
        <Box my={2}>
          <Avatar size={"2xl"} bg="teal.500" />
        </Box>
        <Box w={"100%"}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box className="text-label" w={"120px"}>
              <label>Họ tên</label>
            </Box>
            <Input
              w={"100%"}
              size={"sm"}
              borderRadius={0}
              placeholder="Mật khẩu"
            />
          </Flex>
          <Flex mt={3} alignItems={"center"} justifyContent={"space-between"}>
            <Box className="text-label" w={"120px"}>
              <label>Tên khác</label>
            </Box>
            <Input
              w={"100%"}
              size={"sm"}
              borderRadius={0}
              placeholder="Mật khẩu"
            />
          </Flex>
          <Flex mt={3} alignItems={"center"} justifyContent={"space-between"}>
            <Box className="text-label" w={"120px"}>
              <label>Ngày sinh</label>
            </Box>
            <Input
              w={"100%"}
              size={"sm"}
              borderRadius={0}
              placeholder="Mật khẩu"
            />
          </Flex>
          <Flex mt={3} alignItems={"center"}>
            <Box className="text-label" w={"120px"}>
              <label>Giới tính</label>
            </Box>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="1">Đàn ông</Radio>
                <Radio value="2">Đàn bà</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
          <Flex mt={3} alignItems={"center"} justifyContent={"space-between"}>
            <Box className="text-label" w={"120px"}>
              <label>Quốc tịch</label>
            </Box>
            <Input
              w={"100%"}
              size={"sm"}
              borderRadius={0}
              placeholder="Mật khẩu"
            />
          </Flex>
          <Flex mt={6} justifyContent={"center"}>
            <CustomButton text="Lưu thay đổi" typeButton={2} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
