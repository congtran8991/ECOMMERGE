import {
  Modal,
  Button,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  Box,
  Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

interface PropsType {
  isOpenLogin: boolean;
  setIsOpenLogin: any;
}
export default function Login(props: PropsType) {
  const { isOpenLogin, setIsOpenLogin } = props;
  return (
    <>
      <Modal isOpen={isOpenLogin} onClose={() => {
        setIsOpenLogin(false)
      }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng nhập</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                borderRadius={0}
                placeholder="Email/Số điện thoại/Tên đăng nhập"
              />
            </Box>
            <Box mt={5}>
              <Input borderRadius={0} placeholder="Mật khẩu" />
            </Box>
          </ModalBody>

          <ModalFooter mt={10} mb={10}>
            <Box width={"100%"}>
              <Button
                _hover={{ bg: "var(--clr-green-primary)" }}
                borderRadius={0}
                width={"100%"}
                bg={"var(--clr-green-primary)"}
                color={"var(--clr-white)"}
                textTransform={"uppercase"}
              >
                Đăng Nhập
              </Button>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                fontSize={"14px"}
                mt={1}
              >
                <Box cursor={"pointer"}>Quên mật khẩu</Box>
                <Box>Đăng ký</Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                fontSize={"14px"}
                alignItems={"center"}
                mt={5}
              >
                <Divider />
                <Box pl={5} pr={5}>
                  Hoặc
                </Box>
                <Divider />
              </Box>
              <Box gap={4} display={"flex"} mt={5}>
                <Button
                  width={"50%"}
                  borderRadius={0}
                  bg={"var(--clr-white)"}
                  border={"1px"}
                  borderColor="var(--clr-gray-third)"
                  leftIcon={
                    <FontAwesomeIcon
                      color="#38bdf8"
                      size="lg"
                      icon={faFacebook as IconProp}
                    />
                  }
                >
                  Facebook
                </Button>
                <Button
                  width={"50%"}
                  borderRadius={0}
                  bg={"var(--clr-white)"}
                  border={"1px"}
                  borderColor="var(--clr-gray-third)"
                  leftIcon={
                    <FontAwesomeIcon
                      color="#38bdf8"
                      size="lg"
                      icon={faGoogle as IconProp}
                    />
                  }
                >
                  Google
                </Button>
              </Box>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
