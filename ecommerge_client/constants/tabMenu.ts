interface typeItemTab {
  title: string;
  url: string;
}

const tabMenu: typeItemTab[] = [
  {
    title: "Thông tin tài khoản",
    url: "/customer/account",
  },
  {
    title: "Quản lí đơn hàng",
    url: "/",
  },
  {
    title: "Thông tin thanh toán",
    url: "/order/history",
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
    url: "/customer/coupons",
  },
];

export default tabMenu;
