import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./store/cartSlice";
import IncreAndDecre from "../../components/IncreAndDecre";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const deleteToCart = () => {
    dispatch(deleteItem(item.pizzaId));
  };
  return (
    <li className="py-3">
      <p className="font-sans text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex flex-col items-start justify-between space-y-3 text-stone-500 sm:flex-row sm:space-y-0">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-4 self-end">
          {" "}
          <IncreAndDecre id={pizzaId}>{quantity}</IncreAndDecre>
          <Button
            onClick={deleteToCart}
            className="h-7 w-16 border-red-400 bg-red-400 hover:border-red-400 hover:bg-red-300 active:bg-red-200"
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
