import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const handleInput = (e) => setUser(e.target.value);
  let navigate = useNavigate(); //react hook 규칙으로 이렇게 사용
  const clickBtn = (e) => {
    e.preventDefault();
    if (user === "") {
      return;
    }
    localStorage.setItem("user", user);
    setUser("");
    navigate("/"); //리다이렉트
  };

  return (
    <div>
      <form>
        <input onChange={handleInput} value={user} type="text" />
        <button onClick={clickBtn}>로그인</button>
      </form>
    </div>
  );
}

export default Login;
