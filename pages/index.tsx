import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("counter " + counter);
    if (counter > 10) {
      alert("sei arrivato");
    }
  }, [counter]);

  return (
    <div className={styles.container}>
      {counter}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        add
      </button>
    </div>
  );
}
