import { Grid, Card, CardBody, Text, CardHeader } from "@chakra-ui/react";
import ProductItem from "./item/ProductItem";

export default function ListProduct() {
  return (
    <Card
      width={"80%"}
      marginX={"auto"}
      mt={5}
      border={"1px solid var(--clr-gray-third)"}
    >
      <CardHeader p={3} bgSize="sm" borderBottom="1px" borderColor="gray.300">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="GrayText"
          textTransform="uppercase"
        >
          Danh sách sản phẩm
        </Text>
      </CardHeader>
      <CardBody>
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap={6}
          borderRadius={6}
          boxShadow={0}
        >
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Grid>
      </CardBody>
    </Card>
  );
}
