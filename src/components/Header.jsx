import { Link } from "react-router-dom";
import SearchOrder from "../pages/order/SearchOrder";
import Username from "../pages/user/Username";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between space-y-4 border-b border-stone-200 bg-sky-500 py-3 uppercase sm:flex-row sm:space-y-0 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
