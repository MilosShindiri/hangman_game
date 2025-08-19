import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";
import { languages } from "/utils/languages.js";

export default function Hangman() {
  const [word, setWord] = useState("react");
  const [guess, setGuess] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuess(letter) {
    setGuess((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const langElements = languages.map((lang) => (
    <span
      className="language"
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
      key={lang.name}
    >
      {lang.name}
    </span>
  ));

  let letters = word.split("").map((letter, index) => (
    <span className="letter" key={index}>
      {letter.toUpperCase()}
    </span>
  ));

  let characters = alphabet.split("").map((character, index) => {
    const isGuessed = guess.includes(character);
    const isCorrect = isGuessed && word.includes(character);
    const isWrong = isGuessed && !word.includes(character);
    const className = clsx(
      "character", // default class
      {
        correct: isCorrect,
        wrong: isWrong,
      }
    );

    return (
      <button
        className={className}
        key={index}
        onClick={() => addGuess(character)}
      >
        {character.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section>
        <div className="languages">{langElements}</div>
      </section>
      <section>
        <div className="displayWord">{letters}</div>
      </section>
      <section>
        <div className="keyboard">{characters}</div>
      </section>
    </main>
  );
}
