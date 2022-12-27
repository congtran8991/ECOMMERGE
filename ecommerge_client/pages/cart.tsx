/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  Checkbox,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import BoxWrapper from "basicComponents/BoxWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const theme = {
  color: "sv",
};
export default function Cart() {
  return (
    <Box width={"80%"} marginX={"auto"} paddingX={2}>
      <Box>
      <Box>Giỏ hàng</Box>
      </Box>
      <Box>
        <BoxWrapper>
          <TableContainer>
            <Table size={"lg"} variant="simple">
              <Thead borderBottom={"1px solid red"}>
                <Tr>
                  <Th padding={3} fontSize={12}>
                    <Box display={"flex"}>
                      <Box>
                        <Checkbox
                          mr={3}
                          border={1}
                          borderColor={"var(--clr-gray-second)"}
                        />
                      </Box>
                      <Box>Tất cả sản phẩm</Box>
                    </Box>
                  </Th>
                  <Th padding={3} fontSize={12}>
                    Đơn giá
                  </Th>
                  <Th padding={3} fontSize={12}>
                    {" "}
                    Số lượng
                  </Th>
                  <Th padding={3} fontSize={12}>
                    Thành tiền
                  </Th>
                  <Th padding={3} fontSize={12} isNumeric>
                    <FontAwesomeIcon size="lg" icon={faTrashCan as IconProp} />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td padding={3}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box><Checkbox
                          mr={3}
                          border={1}
                          borderColor={"var(--clr-gray-second)"}
                        /></Box>
                      <Box>
                        <Image
                          p={1}
                          border={"1px"}
                          borderColor={"var(--clr-gray-third)"}
                          width={"7rem"}
                          height={"7rem"}
                          src="https://i.pinimg.com/736x/c1/4d/43/c14d431d0bfafb92d3900bbc38284e26.jpg"
                        />
                      </Box>
                      <Box pl={3}>
                        <Box fontSize={16}>Tên sản phẩm</Box>
                        <Box mt={2} fontSize={16}>
                          Tên sản phẩm
                        </Box>
                      </Box>
                    </Box>
                  </Td>
                  <Td padding={3}>
                    <Box display={"flex"}>
                      <Box mr={2}>249.000₫</Box>
                      <Box
                        color={"var(--clr-gray-second)"}
                        textDecoration={"line-through"}
                        fontSize={13}
                      >
                        450.000₫
                      </Box>
                    </Box>
                    <Box>
                      <Box>Giảm 10%</Box>
                    </Box>
                  </Td>
                  <Td padding={3}>
                    <Box display={"flex"}>
                      <Button
                        size={"sm"}
                        borderRadius={0}
                        border={"1px"}
                        borderColor={"var(--clr-gray-third)"}
                      >
                        +
                      </Button>
                      <Input
                        size={"sm"}
                        textAlign={"center"}
                        borderRadius={0}
                        width="50px"
                      />
                      <Button
                        size={"sm"}
                        borderRadius={0}
                        border={"1px"}
                        borderColor={"var(--clr-gray-third)"}
                      >
                        -
                      </Button>
                    </Box>
                  </Td>
                  <Td padding={3}>498.000 ₫</Td>
                  <Td padding={3} isNumeric>
                    <FontAwesomeIcon size="lg" icon={faTrashCan as IconProp} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </BoxWrapper>
      </Box>
    </Box>
  );
}
