import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoadig] = useState(true);
  const [sport, setSport] = useState([]);
  const getSport = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setSport(json.data.movie);
    setLoadig(false);
  };

  useEffect(() => {
    getSport();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{sport.title}</h2>
          <span>평점 : {sport.rating}</span>
          <span>상영시간 : {sport.runtime}</span>
        </div>
      )}
    </div>
  );
}

export default Detail;
