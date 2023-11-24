import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=" h-10 w-80 rounded-full border-none px-4  text-sm transition-all duration-150 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-inset 
        focus:ring-blue-200 sm:focus:w-[370px] md:focus:w-[450px] lg:focus:w-[700px]"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
