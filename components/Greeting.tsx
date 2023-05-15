import React, { useState, useEffect } from "react";
import styles from "./Greeting.module.css";

const SALUTATIONS = [
  "Hey!",
  "Hello",
  "Greetings!",
  "Namaste",
  "Hola",
  "Hallo",
  "Ciao",
  "Hei",
  "Aloha",
  "Hey There!",
  "Guten Tag :)",
];

const Greeting = () => {
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentLetter, setCurrentLetter] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * SALUTATIONS.length);
      setCurrentGreeting(SALUTATIONS[randomIndex]);
      setCurrentLetter(0);
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetter((prev) => prev + 1);
    }, 200);
    return () => clearInterval(interval);
  }, [currentGreeting]);

  return (
    <div className={styles.greeting}>
      <span className={styles["greeting - text"]}>
        {currentGreeting.substring(0, currentLetter)}
      </span>
      <span className={styles["greeting-underscore"]}> _</span>
    </div>
  );
};

export default Greeting;
