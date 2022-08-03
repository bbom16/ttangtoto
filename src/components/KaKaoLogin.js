import { useLocation } from "react-router-dom";

function KaKaoLogin() {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log(KAKAO_CODE);
  localStorage.setItem("token", KAKAO_CODE);
  window.location.replace("/ttangtoto");

  return <div>카카오로그인</div>;
}

export default KaKaoLogin;
