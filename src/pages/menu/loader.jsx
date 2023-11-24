import { getMenu } from "../../service/apiRestaurant";

export async function menuLoader() {
  return await getMenu();
}

