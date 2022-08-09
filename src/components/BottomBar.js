import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./BottomBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMedal,
  faSignIn,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className={styles.bottomBar}>
      <nav className={user ? styles.login : styles.wrapper}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </Link>
        <Link to="/rank">
          <FontAwesomeIcon icon={faMedal} size="lg" />
        </Link>
        {user ? (
          <section>
            <Link to="/mypage">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
            <Link to="#" onClick={logOut}>
              <FontAwesomeIcon icon={faSignOut} size="lg" />
            </Link>
          </section>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faSignIn} size="lg" />
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default BottomBar;
