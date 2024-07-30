import { useState } from "react";
import styles from "./page.module.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDelete = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>Project 4: Alış Veriş Listesi</h1>
        <div className={styles.container}>
          <h2>Alınacaklar</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Yeni bir madde ekleyin"
            />
            <button type="submit">Add</button>
          </form>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
                <button
                  onClick={() => handleDelete(item)}
                  className={styles.deleteButton}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
