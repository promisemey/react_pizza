import { getOrder } from "../../service/apiRestaurant";

export const orderLoader = async ({ params }) => {
  //   console.log(val);
  return await getOrder(params.orderId);
};

