import { KAKAO_AUTH_URL } from "../components/OAuth";

function Login() {
  const onClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <button onClick={onClick}>카카오로 로그인하기</button>
    </div>
  );
}

export default Login;
