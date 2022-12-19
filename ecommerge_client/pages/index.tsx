import HomeCarousel from "../component/homeCarousel";
import ListProduct from "../component/listProduct";
import ListCategory from "../component/listCategory"
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Mousewheel, Navigation } from "swiper";
import { NavigationOptions, GridOptions } from "swiper/types";
import { Avatar } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <ListCategory />
      <ListProduct />
    </div>
  );
}
