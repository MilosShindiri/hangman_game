import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";
import { languages } from "/utils/languages.js";
import { words } from "/utils/words.js";
import Confetti from "react-confetti";

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

//letters are for displaying the word
//chracters are for keyboard characters
export default function Hangman() {
  // State values
  const [word, setWord] = useState(() => getRandomWord());
  const [guess, setGuess] = useState([]);

  // Derived values

  const wrongGuess = guess.filter(
    (character) => !word.includes(character)
  ).length;

  const isGameWon = word.split("").every((letter) => guess.includes(letter));
  const isGameLost = wrongGuess >= 8;

  const isGameOver = isGameWon || isGameLost;

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // user guesses - clicked on character
  function addGuess(letter) {
    setGuess((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  // displaying languages(html,css,js,raect,ts,node,py,ruby,assembly)
  const langElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuess;
    return (
      <span
        className={`language ${isLanguageLost ? "lost" : ""}`}
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        key={lang.name}
      >
        {lang.name}
      </span>
    );
  });
  // this is for displaying the word
  let letters = word.split("").map((letter, index) => (
    <span className="letter" key={index}>
      {guess.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));
  // create keyboard characters and index them and change the color based on correctnes
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
        disabled={isGameOver}
      >
        {character.toUpperCase()}
      </button>
    );
  });

  function Reset() {
    setGuess([]);
    setWord(getRandomWord());
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      {isGameWon && (
        <>
          <Confetti style={{ position: "absolute", top: 0, left: 0 }} />
          <section className="statusWon">
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </section>
        </>
      )}
      {isGameLost && (
        <section className="statusLost">
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </section>
      )}
      <section>
        <div className="languages">{langElements}</div>
      </section>
      <section>
        <div className="displayWord">{letters}</div>
      </section>
      <section>
        <div className="keyboard">{characters}</div>
      </section>
      {isGameOver && (
        <button className="new-game" onClick={Reset}>
          New Game
        </button>
      )}
    </main>
  );
}
