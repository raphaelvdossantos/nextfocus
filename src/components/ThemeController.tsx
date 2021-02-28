import { useEffect, useState } from "react";
import styles from "../styles/components/ThemeController.module.css";

export function ThemeController() {
  const [themeCheck, setThemeCheck] = useState(null);

  function handleThemeChange(e) {
    e.target.checked ? setThemeCheck(true) : setThemeCheck(false);
  }

  useEffect(() => {
    const doc = document.documentElement;
    if (themeCheck) {
      doc.setAttribute("data-theme", "dark");
    } else {
      doc.setAttribute("data-theme", "light");
    }
  }, [themeCheck]);

  return (
    <div className={styles.themeControllerContainer}>
      <input
        onClick={handleThemeChange}
        type="checkbox"
        name="switch"
        id="switch"
      />
      <label htmlFor="switch">Alternar</label>
    </div>
  );
}
