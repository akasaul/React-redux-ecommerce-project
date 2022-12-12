import CartItem from "../components/CartItem";
import CardList from "../components/CardList";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  return <section className="bg-gray-200 mt-8">
      {
        cart.map((item) => <CartItem item={item} />)
      }
      <h2 className="text-right font-semibold p-4">Total price ${cart.reduce((acc, iter) => acc+= (iter.count* iter.price ), 0)}</h2>
      <div className="flex justify-between w-full border-2 p-4 bg-white"> 
        <Link to="/shop">
          <button className="bg-white border-2 rounded-lg border-red-400 text-red-400 p-2 px-3">To Shop</button>
        </Link>
        <button className="bg-red-400 text-white rounded-lg p-1 px-4">continue</button>
      </div>
  </section>;
};

export default Cart;
