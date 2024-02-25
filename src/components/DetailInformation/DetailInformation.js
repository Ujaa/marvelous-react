import PropTypes from "prop-types";

import styles from "./detailinformation.module.css";

function DetailInformation({
  setRef,
  title,
  currentIndex,
  index,
  information,
}) {
  return (
    <article ref={setRef} className={styles.article}>
      <h2 className={styles.content_title}>{title}</h2>
      <div className={styles.content_list_wrapper}>
        <ul
          className={`${styles.content_list} ${
            index === currentIndex ? styles.animate_scroll : ""
          }`}
        >
          {information.items.length === 0 ? (
            <li className={styles.content_list_item}>No {title} :&#40;</li>
          ) : (
            information.items.map((item, idx) => (
              <li className={styles.content_list_item} key={idx}>
                {("0" + (idx + 1)).slice(-2)} {item.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </article>
  );
}

DetailInformation.propTypes = {
  setRef: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  information: PropTypes.object.isRequired,
};

export default DetailInformation;
