import { useState } from "react";
import styles from "./page.module.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newItem = { id: Date.now(), text: inputValue.trim() };
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleDelete = (idToDelete) => {
    setItems(items.filter((item) => item.id !== idToDelete));
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
            {items.map((item) => (
              <li key={item.id} className={styles.listItem}>
                {item.text}
                <button
                  onClick={() => handleDelete(item.id)}
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
