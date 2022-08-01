import { useEffect, useState } from "react";
import Sports from "../components/Sports";

function Home() {
  const [loading, setLoadig] = useState(true);
  const [sports, setSports] = useState([]);
  const getSports = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&limit=10`
      )
    ).json();
    setSports(json.data.movies);
    setLoadig(false);
  };
  useEffect(() => {
    getSports();
  }, []);

  return (
    <article>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          {sports.map((sport) => (
            <Sports key={sport.id} id={sport.id} title={sport.title} />
          ))}
        </div>
      )}
    </article>
  );
}

export default Home;
