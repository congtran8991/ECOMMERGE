import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import 'swiper/css/autoplay'

export default function Home() {
  return (
    <div>
       <div className="flex w-full justify-between">
          <Swiper
            autoplay = {{
              delay: 1000
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://media3.scdn.vn/img4/2022/12_09/UbxcJGU2Ji727dmmlYu6.jpg"
                alt="Dan Abramov"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="https://media3.scdn.vn/img4/2022/12_13/GYCxgPUBJYFeqW0GQ0uF.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  );
}
