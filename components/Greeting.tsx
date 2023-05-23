"use client";

import { useState, useEffect } from "react";
import styles from "./Greeting.module.css";

const SALUTATIONS = [
  "Hey!",
  "Hello",
  "Greetings!",
  "Bonjour",
  "Hola",
  "Hallo",
  "Ciao",
  "Aloha",
  "Hey There!",
  "Guten Tag :)",
];

const Greeting = () => {
  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentLetter, setCurrentLetter] = useState(0);

  //Setzen eines zufälligen Begrüßungstexts und Zurücksetzen des aktuellen Buchstabens beim Initialisieren der Komponente
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * SALUTATIONS.length);
    setCurrentGreeting(SALUTATIONS[randomIndex]);
    setCurrentLetter(0);
  }, []);

  useEffect(() => {
    // Erhöhen des aktuellen Buchstabens in regelmäßigen Abständen von 200 Millisekunden
    const interval = setInterval(() => {
      setCurrentLetter((prev) => prev + 1);
    }, 200);
    // Cleanup
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
