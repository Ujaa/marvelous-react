import PropTypes from "prop-types";

import styles from "./detailheader.module.css";

function DetailHeader({ character }) {
  return (
    <header className={styles.character_header}>
      <p className={styles.character_name}>{character.name}</p>
      <div className={styles.character_img_wrapper}>
        <img
          className={styles.character_img}
          alt={character.name}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      </div>
    </header>
  );
}

DetailHeader.propTypes = {
  subTitle: PropTypes.object.isRequired,
};

export default DetailHeader;
