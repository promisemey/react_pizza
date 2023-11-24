import { useSelector } from "react-redux";
import CreateUser from "../pages/user/CreateUser";
import Button from "../components/Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 font-mono text-2xl font-semibold">
        <span className=" text-5xl">The best pizza.</span>
        <br />
        <span className="hidden text-3xl text-sky-400 md:block">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" className={"m-auto"}>
          Continue
        </Button>
      )}
    </div>
  );
}

export default Home;
