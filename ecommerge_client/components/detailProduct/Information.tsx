import { Text, Box, Badge, Button, Input } from "@chakra-ui/react";

export default function InformationProduct() {
  return (
    <Box width={["100%", "100%", "100%", "60%"]} className="info pl-5 pr-5">
      <Box className="header">
        <Box>
          <Text fontWeight={"bold"} fontSize={22}>
            Bộ lau nhà TIKILabel Innovative Mop Set
          </Text>
          <Box display={"flex"} marginTop={2} gap={6}>
            <Text color={"var(--clr-gray-second)"}>Đánh giá</Text>
            <Text color={"var(--clr-gray-second)"}>1,2K Đánh giá</Text>
            <Text color={"var(--clr-gray-second)"}>5,5K Đã bán</Text>
          </Box>
        </Box>
      </Box>
      <Box bg={"var(--clr-gray-primary)"} padding={5} marginTop={5}>
        <Box display={"flex"} alignItems={"center"} gap={5}>
          <Text
            color={"var(--clr-gray-second)"}
            fontSize={18}
            textDecoration={"line-through"}
          >
            đ 160.000
          </Text>
          <Text
            color={"var(--clr-green-primary)"}
            fontSize={25}
            fontWeight={"bold"}
          >
            đ160.000
          </Text>
          <Badge bg={"var(--clr-green-primary)"} color={"var(--clr-white)"}>
            33% Giảm
          </Badge>
        </Box>
      </Box>
      <Box marginTop={5}>
        <Box color={"var(--clr-gray-second)"} display={"flex"}>
          <Text width={150}>Mã giảm giá của shop</Text>
          <Box>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              3% Giảm
            </Badge>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              32% Giảm
            </Badge>
            <Badge
              bg={"var(--clr-green-second)"}
              color={"var(--clr-green-primary)"}
              padding={1}
              marginRight={3}
            >
              13% Giảm
            </Badge>
          </Box>
        </Box>
        {/* ---------------------------- */}
        <Box color={"var(--clr-gray-second)"} display={"flex"} marginTop={10}>
          <Text width={150}>Màu sắc</Text>
          <Box>
            <Button
              _hover={{
                color: "var(--clr-green-primary)",
                border: "1px solid var(--clr-green-primary)",
              }}
              marginRight={3}
              borderRadius={0}
              width={70}
              border={"1px"}
              borderColor={"var(--clr-gray-third)"}
              color={"--clr-black-primary"}
              variant="outline"
              size={"sm"}
            >
              Đen
            </Button>
            <Button
              _hover={{
                color: "var(--clr-green-primary)",
                border: "1px solid var(--clr-green-primary)",
              }}
              marginRight={3}
              borderRadius={0}
              width={70}
              border={"1px"}
              borderColor={"var(--clr-gray-third)"}
              color={"--clr-black-primary"}
              variant="outline"
              size={"sm"}
            >
              Đỏ
            </Button>
            <Button
              _hover={{
                color: "var(--clr-green-primary)",
                border: "1px solid var(--clr-green-primary)",
              }}
              marginRight={3}
              borderRadius={0}
              width={70}
              border={"1px"}
              borderColor={"var(--clr-gray-third)"}
              color={"--clr-black-primary"}
              variant="outline"
              size={"sm"}
            >
              Vàng
            </Button>
            <Button
              _hover={{
                color: "var(--clr-green-primary)",
                border: "1px solid var(--clr-green-primary)",
              }}
              marginRight={3}
              borderRadius={0}
              width={70}
              border={"1px"}
              borderColor={"var(--clr-gray-third)"}
              color={"--clr-black-primary"}
              variant="outline"
              size={"sm"}
            >
              Hồng đất
            </Button>
          </Box>
        </Box>
        {/* ---------------------------- */}
        <Box color={"var(--clr-gray-second)"} display={"flex"} marginTop={10}>
          <Text width={150}>Size</Text>
          <Box>
            <Badge bg={"var(--clr-primary)"} color={"var(--clr-white)"}>
              33% Giảm
            </Badge>
          </Box>
        </Box>
        {/* ---------------------------- */}
        <Box color={"var(--clr-gray-second)"} display={"flex"} marginTop={10}>
          <Text width={150}>Số lượng</Text>
          <Box display={"flex"}>
            <Button size={"sm"} borderRadius={0} border={"1px"} borderColor={"var(--clr-gray-third)"}>+</Button>
            <Input size={"sm"} textAlign={"center"} borderRadius={0} width="70px"/>
            <Button size={"sm"} borderRadius={0} border={"1px"} borderColor={"var(--clr-gray-third)"}>-</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
