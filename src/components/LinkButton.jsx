import { Link } from "react-router-dom";

export default function LinkButton({ to, children }) {
  return (
    <Link to={to} className="text-gray-400 hover:text-blue-400 hover:underline">
      {children}
    </Link>
  );
}
