import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  let { id } = useParams();
  const [loading, setLoadig] = useState(true);
  const [sport, setSport] = useState([]);
  const getSport = async () => {
    const json = await (await fetch(`/api/v1/matches/${id}`)).json();
    setSport(json);
    setLoadig(false);
  };

  useEffect(() => {
    getSport();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : (
        <div>
          <h2>{sport.name}</h2>
          <span>날짜 : {sport.date}</span>
          <br />
          <span>
            {sport.homeTeam} vs {sport.awayTeam}
          </span>
        </div>
      )}
    </div>
  );
}

export default Detail;
