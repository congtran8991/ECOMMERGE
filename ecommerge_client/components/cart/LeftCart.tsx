import {
  Box,
  TableContainer,
  Table,
  Tr,
  Th,
  Tbody,
  Thead,
  Checkbox
} from "@chakra-ui/react";
import BoxWrapper from "basicComponents/BoxWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import CartItem from "components/item/CartItem";
export default function LeftCart() {
  return (
    <BoxWrapper width={["100%", "100%", "100%", "75%"]}>
      <TableContainer>
        <Table size={"lg"} variant="simple">
          <Thead>
            <Tr>
              <Th padding={3} fontSize={12}>
                <Box display={"flex"}>
                  <Box>
                    <Checkbox
                      colorScheme="teal"
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
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Tbody>
        </Table>
      </TableContainer>
    </BoxWrapper>
  );
}
