import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const clickHandler = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };

  return (
    <div>
      <form method="get">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" onClick={clickHandler} />
      </form>
    </div>
  );
};

export default Login;
