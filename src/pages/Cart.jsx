import CartItem from "../components/CartItem";
import CardList from "../components/CardList";
import {useSelector} from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  return <section>
      <CardList list={cart} />
  </section>;
};

export default Cart;
