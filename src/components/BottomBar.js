import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./BottomBar.module.css";
// import "../FontAwesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomBar() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    let userName = localStorage.getItem("user");
    if (userName === null) {
      console.log("로그인해!");
    } else {
      setUser(userName);
      setLogin(true);
      console.log(`Hi, ${user}`);
    }
  }, []);

  return (
    <div>
      <nav className={styles.wrapper}>
        <Link to="/">
          <div>홈</div>
        </Link>
        <Link to="/rank">
          <div>랭킹</div>
        </Link>
        {!login ? (
          <Link to="/login">
            <div>로그인</div>
          </Link>
        ) : (
          <Link to="/mypage">
            <div>마이페이지</div>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default BottomBar;
