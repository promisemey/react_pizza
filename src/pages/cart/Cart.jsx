import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton";
import CartItem from "../cart/CartItem";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "./store/cartSlice";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  // const cart = fakeCart;
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="p-4 ">
      <LinkButton to={"/menu"}>&larr; Back to menu</LinkButton>
      <div className="rounded-sm bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-bold">Your cart, {username}</h2>
        {cart.length ? (
          <ul className="divide-y divide-stone-200 ">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId}></CartItem>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center p-10 font-bold text-stone-300">
            空空如也
          </div>
        )}
      </div>

      {cart.length ? (
        <div className="flex flex-wrap justify-around gap-y-3 p-10 text-lg">
          <Link to="/order/new" className="hover:text-blue-500">
            Order pizzas
          </Link>
          <Button className="text-black hover:text-white" onClick={clearCart}>
            Clear cart
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
