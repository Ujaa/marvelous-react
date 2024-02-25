import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./characterlistitem.module.css";

function CharacterListItem({ index, character, onMouseEnter }) {
  return (
    <Link to={`character/${character.id}`}>
      <li
        key={index}
        className={styles.character_list_item}
        onMouseEnter={onMouseEnter}
      >
        {("0" + (index + 1)).slice(-2)} {character.name}
      </li>
    </Link>
  );
}

CharacterListItem.propTypes = {
  index: PropTypes.number.isRequired,
  character: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default CharacterListItem;
