import { Box, List, ListItem } from "@chakra-ui/react";
import MenuItem from "./item/MenuItem";
export default function TabMenu() {
  return (
    <Box width={["100%", "100%", "100%", "20%"]}>
      <List>
        <MenuItem active={true} text="Thông tin tài khoản" />
        <MenuItem text="Quản lý đơn hàng" />
        <MenuItem text="Thông tin thanh toán" />
        <MenuItem text="Sản phẩm yêu thích" />
        <MenuItem text="Sản phẩm bạn đã xem" />
        <MenuItem text="Mã giảm giá" />
      </List>
    </Box>
  );
}
