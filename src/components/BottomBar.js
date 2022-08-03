import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./BottomBar.module.css";
// import "../FontAwesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomBar() {
  const LOCAL_VALUE = "token";
  const [user, setUser] = useState(() => localStorage.getItem(LOCAL_VALUE));

  const logOut = () => {
    localStorage.removeItem(LOCAL_VALUE);
    window.location.replace("/ttangtoto");
  };

  useEffect(() => {
    setUser(localStorage.getItem(LOCAL_VALUE));
  }, [user]);

  return (
    <div>
      <nav className={user ? styles.login : styles.wrapper}>
        <Link to="/">
          <div>홈</div>
        </Link>
        <Link to="/rank">
          <div>랭킹</div>
        </Link>
        {user ? (
          <section>
            <Link to="/mypage">
              <div>마이페이지</div>
            </Link>
            <Link to="#" onClick={logOut}>
              <div>로그아웃</div>
            </Link>
          </section>
        ) : (
          <Link to="/login">
            <div>로그인</div>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default BottomBar;
