import { Text, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box mt={5} bg={"var(--clr-gray-third)"}>
      <Box padding={3} marginX="auto" width={["100%", "100%", "100%", "100%", "100%", "80%"]}>
        <Text fontWeight={"bold"} textTransform={"uppercase"}>
          Địa chỉ
        </Text>
        <Box>
          Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường
          12, quận 10, Thành phố Hồ Chí Minh
        </Box>
        <Box>
          Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và
          nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
        </Box>
        <Box>
          Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu
          tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần
          thứ 23 ngày 14/02/2022
        </Box>
        <Box>© 2022 - Bản quyền của Công ty TNHH Ti Ki</Box>
      </Box>
    </Box>
  );
}
