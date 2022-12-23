
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box, useDisclosure } from "@chakra-ui/react";
import { faCartFlatbed, faUser } from "@fortawesome/free-solid-svg-icons";
import Login from "../Login";
import Register from "../Register";

export default function RightHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);
  const [isOpenRegister, setIsOpenRegister] = useState<boolean>(false);
  return (
    <Box display={"flex"} minWidth={"250px"}>
      <Box width={"100%"} display={"flex"} ml={5}>
        <FontAwesomeIcon
          color={"var(--clr-white)"}
          size="xl"
          icon={faUser as IconProp}
        />
        <Box color={"var(--clr-white)"} ml={1}>
          <Box fontSize={"10px"}>
            <Box
              cursor={"pointer"}
              onClick={() => {
                setIsOpenLogin(true);
              }}
            >
              Đăng nhập
            </Box>
            <Box
              cursor={"pointer"}
              onClick={() => {
                setIsOpenRegister(true);
              }}
            >
              Đăng kí
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} width={"100%"}>
        <FontAwesomeIcon
          color={"var(--clr-white)"}
          size="xl"
          icon={faCartFlatbed as IconProp}
        />
        <Box color={"var(--clr-white)"} ml={1}>
          Giỏ hàng
        </Box>
      </Box>
      <Login isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} />
      <Register
        isOpenRegister={isOpenRegister}
        setIsOpenRegister={setIsOpenRegister}
      />
    </Box>
  );
}
