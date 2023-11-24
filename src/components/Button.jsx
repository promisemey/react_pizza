import { Link } from "react-router-dom";

export default function Button({ children, disabled, className, to, onClick }) {
  if (to)
    return (
      <Link
        to={to}
        className="rounded-md px-4 py-2 text-blue-400 ring hover:text-yellow-500 hover:ring-yellow-500"
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex h-10 items-center justify-around rounded-md border border-blue-400 bg-blue-400 px-9 font-bold text-white transition-colors duration-300 hover:border-blue-300 hover:bg-blue-300 active:bg-blue-600 disabled:cursor-not-allowed disabled:border-slate-400 disabled:bg-slate-400 ${className}`}
      >
        {children}
      </button>
    );

  return (
    <button
      disabled={disabled}
      className={`flex h-10 items-center justify-around rounded-md border border-blue-400 bg-blue-400 px-9 font-bold text-white transition-colors duration-300 hover:border-blue-300 hover:bg-blue-300 active:bg-blue-600 disabled:cursor-not-allowed disabled:border-slate-400 disabled:bg-slate-400 ${className}`}
    >
      {children}
    </button>
  );
}
