import {
  Card,
  Image,
  Stack,
  Heading,
  Text
} from "@chakra-ui/react";

export default function ProductItem() {
  return (
    <Card maxW="sm" height="400px">
      <Image
        height={"250px"}
        src="https://salt.tikicdn.com/cache/750x750/ts/product/13/a9/d8/52938a99379b0da253f1f7727c1932ed.png.webp"
        alt="Green double couch with wooden legs"
      />

      <Stack mx="2" my="2">
        <Text size="xs">Living room Sofa Living room Sofa</Text>
        <Text>Đánh giá | Số lượng bán</Text>
        <Heading size="md">Giá bán</Heading>
        <Text>Thông tin khuyến mãi</Text>
      </Stack>
    </Card>
  );
}
