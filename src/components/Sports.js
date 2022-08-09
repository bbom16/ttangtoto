import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Sports.module.css";
function Sports({ id, name }) {
  return (
    <li>
      <Link to={`/detail/${id}`}>{name}</Link>
    </li>
  );
}
Sports.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default Sports;
