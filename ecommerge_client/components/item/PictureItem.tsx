import React from "react";
import { SwiperSlide } from "swiper/react";
import { Avatar } from "@chakra-ui/react";

const CategoryItem = () => {
  return (  
    <SwiperSlide>
      <div className="p-2 w-full text-center border border-gray-300">
        <Avatar
          size="lg"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
      </div>
    </SwiperSlide>
  );
};
//
CategoryItem.displayName = "SwiperSlide";
export default CategoryItem;
