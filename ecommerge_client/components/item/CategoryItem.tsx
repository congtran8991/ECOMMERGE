import React from "react";
import { SwiperSlide } from "swiper/react";
import { Avatar, Box } from "@chakra-ui/react";

const CategoryItem = () => {
  return (
    <SwiperSlide>
      <Box
        textAlign={"center"}
        p={2}
        width={"100%"}
        border={"1px solid var(--clr-gray-third)"}
      >
        <Avatar
          size="lg"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
        <Box mt={5} mb={2} height={8}>Tên danh mục </Box>
      </Box>
    </SwiperSlide>
  );
};
//
CategoryItem.displayName = "SwiperSlide";
export default CategoryItem;
