import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../components/Button";
import { createOrder } from "../../service/apiRestaurant";
import { fetchAddress } from "../user/store/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const navgation = useNavigation();
  const action = useActionData();
  const username = useSelector((state) => state.user.username);
  const isDisabled = navgation.state === "submitting";
  const dispatch = useDispatch();
  const { address, location, status } = useSelector((state) => state.user);
  const isLoading = status === "loading";
  const getPosition = (e) => {
    e.preventDefault();
    dispatch(fetchAddress());
  };

  return (
    <div className="my-10 bg-white p-10 shadow-md">
      <h2>Ready to order? lets go!</h2>

      <Form method="POST" className="flex flex-col gap-4">
        <div className="mx-2">
          <label>First Name</label>
          <input
            className="input"
            type="text"
            defaultValue={username}
            name="customer"
            required
          />
        </div>

        <div className="mx-2">
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {action?.phone && (
            <p className="mt-1 rounded-md bg-red-100 px-2 py-1 text-[12px] text-red-600">
              {action?.phone}
            </p>
          )}
        </div>

        <div className="mx-2">
          <label>Address</label>
          <div className="flex">
            <input
              className={`input ${address ? "" : "rounded-e-none"}`}
              type="text"
              name="address"
              disabled={isLoading}
              defaultValue={address}
              required
            />
            {!location.longitude && !location.latitude && (
              <button
                disabled={isLoading}
                onClick={getPosition}
                className="h-10 basis-36 rounded-e-md 
            border-l border-blue-400  bg-blue-400 font-bold text-white ring-1 ring-black"
              >
                定位
              </button>
            )}
          </div>
        </div>

        <div className="mx-2 flex items-center gap-1">
          <input
            className="mr-1 accent-blue-500"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
        </div>

        <div>
          <Button disabled={isDisabled}>Order now</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = Object.fromEntries(await request.formData());

  const errors = {};
  if (!isValidPhone(formData.phone))
    errors.phone = "请给我们你正确的电话号码。我们可能需要它来联系你。";
  if (Object.keys(errors).length > 0) return errors;

  const order = {
    ...formData,
    cart: JSON.parse(formData.cart),
    priority: formData.priority === "on",
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
