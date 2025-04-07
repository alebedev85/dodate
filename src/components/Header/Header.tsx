import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleTheme } from "../../store/themeSlice";
import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>The Wassermans</h1>
        <p className={styles.subtitle}>Расписание игр</p>
        <button
          className={styles.button}
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
