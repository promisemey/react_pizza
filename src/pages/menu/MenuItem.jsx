import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/store/cartSlice";
import IncreAndDecre from "../../components/IncreAndDecre";

function MenuItem({ pizza }) {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  // const isExisting = cart.findIndex((pizza) => pizza.pizzaId === id);
  const isExisting = cart.find((pizza) => pizza.pizzaId === id);

  const addToCart = () => {
    console.log(isExisting);

    dispatch(
      addItem({
        pizzaId: id,
        name,
        unitPrice,
        quantity: 1,
        totalPrice: unitPrice * 1,
      }),
    );
  };

  return (
    <li className="mx-4 flex w-full  cursor-pointer overflow-hidden rounded-md shadow-md transition-all duration-200  hover:shadow-lg sm:mx-0 sm:w-[32%] sm:flex-col ">
      <img
        src={imageUrl}
        alt={name}
        className={`w-[150px] sm:w-full ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className=" flex flex-1 flex-col bg-white p-3 text-lg font-bold">
        <p className="line-clamp-1">{name}</p>
        <p className="mb-3 line-clamp-2 capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <>
              <p>{formatCurrency(unitPrice)}</p>
              {!isExisting || !isExisting.quantity ? (
                <Button className="h-7 w-7" onClick={addToCart}>
                  +
                </Button>
              ) : (
                <IncreAndDecre id={id}>{isExisting.quantity}</IncreAndDecre>
              )}
            </>
          ) : (
            <p className="text-stone-500">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
