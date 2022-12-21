import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import PictureItem from "../../component/item/pictureItem";
import { NavigationOptions, GridOptions } from "swiper/types";
import { Grid, Pagination, Mousewheel, Navigation } from "swiper";
import { Avatar } from "@chakra-ui/react";

export default function PictureProduct() {
  return (
    <Box width={["100%", "100%", "100%", "40%"]} className="img">
      <Image
        width={"100%"}
        src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
        alt="Dan Abramov"
      />
      
        <Swiper
        spaceBetween={15}
          slidesPerView={5}
          mousewheel={true}
          navigation={
            {
              clickable: true,
            } as NavigationOptions
          }
          modules={[Grid, Mousewheel, Navigation]}
          className="mySwiper mt-4"
        >
          <PictureItem />
          <PictureItem />
          <PictureItem />
          <PictureItem />
          <PictureItem />
          <PictureItem />
        </Swiper>
      
    </Box>
  );
}
