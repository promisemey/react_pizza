import { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./store/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName({ username, age: "11" }));
    navigate("/menu");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-3 flex flex-col items-center space-y-10"
    >
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="input"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
