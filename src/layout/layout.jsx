import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import CartOverview from "../pages/cart/CartOverview";
import Loader from "../components/loader";

export default function Layout() {
  const navigation = useNavigation();
  //   加载状态
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {isLoading && <Loader />}
      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
