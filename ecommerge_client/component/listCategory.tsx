import HomeCarousel from "../component/homeCarousel";
import ListProduct from "../component/listProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Mousewheel, Navigation } from "swiper";
import { NavigationOptions, GridOptions } from "swiper/types";
import { Avatar, Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import CategoryItem from "../component/item/categoryItem";

export default function Home() {
  return (
    <Card className="border border-gray-300 w-4/5 mx-auto mt-5">
      <CardHeader
        style={{ padding: "10px" }}
        bgSize={"sm"}
        borderBottom="1px"
        borderColor="gray.300"
      >
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
