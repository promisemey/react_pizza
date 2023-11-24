import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const pizza = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  const total = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );
  return (
    <div className="flex items-center justify-between bg-slate-200 p-4">
      <p className="space-x-4">
        <span>{pizza} pizzas</span>
        <span>${total}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
