import { useEffect, useState } from "react";
import Sports from "../components/Sports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import sportsStyles from "../components/Sports.module.css";

function Home() {
  const [loading, setLoadig] = useState(true);
  const [sports, setSports] = useState([]);
  const getSports = async () => {
    const json = await (await fetch(`/api/v1/matches`)).json();
    setSports(json.matches);
    setLoadig(false);
  };
  useEffect(() => {
    getSports();
  }, []);

  return (
    <article className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>경기일정</h1>
          <ul className={sportsStyles.sports}>
            {sports.map((sport) => (
              <Sports key={sport.id} id={sport.id} name={sport.name} />
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default Home;
