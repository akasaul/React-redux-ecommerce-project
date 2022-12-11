import CartItem from "../components/CartItem";
import CardList from "../components/CardList";
import {useSelector} from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  return <section>
      {
        cart.map((item) => <CartItem item={item} />)
      }
      <h2>Total price ${cart.reduce((acc, iter) => acc+= (iter.count* iter.price ), 0)}</h2>
  </section>;
};

export default Cart;
