import CardList from "../components/CardList";
import { useSelector } from "react-redux";
import { ShopSlice } from "../features/ShopItems/ShopSlice";

const Shop = () => {
    const shopData = useSelector((state) => state.shop.value);
  return (
    <h2>
      <CardList list={shopData} />
    </h2>
  );
};

export default Shop;
