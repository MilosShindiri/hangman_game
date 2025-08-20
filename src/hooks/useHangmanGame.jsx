import { useState, useMemo } from "react";
import { getFarewellText, getRandomWord } from "/utils/utils.js";
import { languages } from "/utils/languages.js";

export function useHangmanGame() {
  const [word, setWord] = useState(() => getRandomWord());
  const [guess, setGuess] = useState([]);

  const wrongGuess = guess.filter(
    (character) => !word.includes(character)
  ).length;

  const isGameWon = word.split("").every((letter) => guess.includes(letter));
  const isGameLost = wrongGuess >= 8;
  const isGameOver = isGameWon || isGameLost;

  const addGuess = (letter) => {
    setGuess((prev) => (prev.includes(letter) ? prev : [...prev, letter]));
  };

  const farewellMsg = useMemo(() => {
    if (wrongGuess > 0 && wrongGuess <= languages.length) {
      const lostLanguage = languages[wrongGuess - 1];
      const message = getFarewellText(lostLanguage.name);
      return message;
    }
  }, [wrongGuess]);

  const resetGame = () => {
    setGuess([]);
    setWord(getRandomWord());
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return {
    word,
    guess,
    wrongGuess,
    isGameWon,
    isGameLost,
    isGameOver,
    farewellMsg,
    alphabet,
    addGuess,
    resetGame,
  };
}
