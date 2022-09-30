import styles from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="Meal Image" />
      </div>
    </>
  );
};

export default Header;
