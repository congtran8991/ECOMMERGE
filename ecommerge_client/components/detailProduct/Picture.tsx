import { Box, Image } from "@chakra-ui/react";
import { Swiper } from "swiper/react";
import PictureItem from "../item/PictureItem";
import { NavigationOptions } from "swiper/types";
import { Grid, Pagination, Mousewheel, Navigation } from "swiper";

export default function PictureProduct() {
  return (
    <Box width={["100%", "100%", "100%", "40%"]} className="img">
      <Box>
        <Image
          width={"auto"}
          height={"auto"}
          src="https://kenh14cdn.com/thumb_w/620/2020/5/28/0-1590653959375414280410.jpg"
          alt="Dan Abramov"
        />
      </Box>
      <Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          mousewheel={true}
          navigation={
            {
              clickable: true,
            } as NavigationOptions
          }
          modules={[Grid, Mousewheel, Navigation]}
          className="mySwiper"
          style={{marginTop: 20}}
        >
          <PictureItem />
          <PictureItem />
          <PictureItem />
          <PictureItem />
          <PictureItem />
          <PictureItem />
        </Swiper>
      </Box>
    </Box>
  );
}
