import HomeCarousel from "./HomeCarousel";
import ListProduct from "./ListProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Mousewheel, Navigation } from "swiper";
import { NavigationOptions, GridOptions } from "swiper/types";
import { Avatar, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import CategoryItem from "./item/CategoryItem";

export default function ListCategory() {
  return (
    <Card
      width={"80%"}
      marginX={"auto"}
      mt={5}
      border={"1px solid var(--clr-gray-third)"}
    >
      <CardHeader p={3} bgSize={"sm"} borderBottom="1px" borderColor="gray.300">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="GrayText"
          textTransform="uppercase"
        >
          Danh mục
        </Text>
      </CardHeader>
      <CardBody>
        <Swiper
          slidesPerView={9}
          mousewheel={true}
          navigation={
            {
              clickable: true,
            } as NavigationOptions
          }
          modules={[Grid, Mousewheel, Navigation]}
          className="mySwiper"
        >
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </Swiper>
      </CardBody>
    </Card>
  );
}
