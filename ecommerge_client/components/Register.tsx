import {
  Modal,
  Button,
  ModalOverlay,
  ModalFooter,
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

interface props {
  isOpenRegister: boolean;
  setIsOpenRegister: any;
}

const theme = {
  
}
export default function Register(props: props) {
  const { isOpenRegister, setIsOpenRegister } = props;
  return (
    <>
      <Modal
        isOpen={isOpenRegister}
        onClose={() => {
          setIsOpenRegister(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng ký</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                borderRadius={0}
                placeholder="Email/Số điện thoại/Tên đăng nhập"
              />
            </Box>
          </ModalBody>

          <ModalFooter mt={7} mb={10}>
            <Box width={"100%"}>
              <Button
                _hover={{ bg: "var(--clr-green-primary)" }}
                borderRadius={0}
                width={"100%"}
                bg={"var(--clr-green-primary)"}
                color={"var(--clr-white)"}
                textTransform={"uppercase"}
              >
                Tiếp theo
              </Button>
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
