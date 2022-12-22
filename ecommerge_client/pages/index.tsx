import HomeCarousel from "components/HomeCarousel";
import ListProduct from "components/ListProduct";
import ListCategory from "components/ListCategory"

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <ListCategory />
      <ListProduct />
    </div>
  );
}
