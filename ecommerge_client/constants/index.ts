export const APP_PATHS = {
  PROFILE: "/customer/account",
  ORDER_HISTORY: "/order/history",
  COUPONS: "/customer/coupons",
};

export const MENU_ITEMS = [
  {
    title: "Thông tin tài khoản",
    url: APP_PATHS.PROFILE,
  },
  {
    title: "Quản lí đơn hàng",
    url: "/",
  },
  {
    title: "Thông tin thanh toán",
    url: APP_PATHS.ORDER_HISTORY,
  },
  {
    title: "Sản phẩm yêu thích",
    url: "/",
  },
  {
    title: "Sản phẩm bạn đã xem",
    url: "/",
  },
  {
    title: "Mã giảm giá",
    url: APP_PATHS.COUPONS,
  },
];
