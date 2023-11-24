import { useDispatch } from "react-redux";
import { decrease, increase } from "../pages/cart/store/cartSlice";
import Button from "./Button";
export default function IncreAndDecre({ id, children }) {
  const dispatch = useDispatch();
  // 增加
  const increaseToCart = () => {
    dispatch(increase(id));
  };

  // 减少
  const decreaseToCart = () => {
    dispatch(decrease(id));
  };

  return (
    <div className="flex items-center ">
      <Button
        disabled={!children}
        className="mx-0 h-0 !rounded-full px-2 py-3"
        onClick={decreaseToCart}
      >
        -
      </Button>
      <span className="px-2 text-lg">{children}</span>
      <Button
        className="mx-0 h-0 !rounded-full px-2 py-3"
        onClick={increaseToCart}
      >
        +
      </Button>
    </div>
  );
}
