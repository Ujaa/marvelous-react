import styles from "./scroll.module.css";

function Scroll() {
  return (
    <div className={styles.scroll_icon_wrapper}>
      <div className={styles.scroll_icon}>
        <div className={styles.scroll_icon_dot}></div>
      </div>
      <span className={styles.scroll_icon_label}>scroll</span>
    </div>
  );
}

export default Scroll;
