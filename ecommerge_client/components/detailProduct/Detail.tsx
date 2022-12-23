import { Text, Box, Badge } from "@chakra-ui/react";

export default function DetailProduct() {
  return (
    <Box padding={5}>
      <Box bg={"var(--clr-gray-primary)"}>
        <Text fontSize={"22px"} padding={3} textTransform={"uppercase"}>
          Chi tiết sản phẩm
        </Text>
      </Box>
      <Box marginTop={5}>
        <Box marginTop={5} color={"var(--clr-gray-second)"} display={"flex"}>
          <Text width={150}>Mã giảm giá</Text>
          <Box>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              3% Giảm
            </Badge>
          </Box>
        </Box>
        <Box marginTop={5} color={"var(--clr-gray-second)"} display={"flex"}>
          <Text width={150}>Mã giảm giá</Text>
          <Box>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              3% Giảm
            </Badge>
          </Box>
        </Box>
        <Box marginTop={5} color={"var(--clr-gray-second)"} display={"flex"}>
          <Text width={150}>Mã giảm giá</Text>
          <Box>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              3% Giảm
            </Badge>
          </Box>
        </Box>
        <Box marginTop={5} color={"var(--clr-gray-second)"} display={"flex"}>
          <Text width={150}>Mã giảm giá</Text>
          <Box>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              3% Giảm
            </Badge>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
