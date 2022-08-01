import { Link } from "react-router-dom";

function Sports({ id, title }) {
  return (
    <ul>
      <li>
        <Link to={`/detail/${id}`}>{title}</Link>
      </li>
    </ul>
  );
}

export default Sports;
