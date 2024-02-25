import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./aside.module.css";

function Aside({ subTitle }) {
  return (
    <aside className={styles.aside_wrapper}>
      <Link to={"/"}>
        <h1>Marvelous React</h1>
      </Link>
      <h1>{subTitle}</h1>
    </aside>
  );
}

Aside.propTypes = {
  subTitle: PropTypes.string.isRequired,
};

export default Aside;
