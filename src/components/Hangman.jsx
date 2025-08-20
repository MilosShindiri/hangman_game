import { languages } from "/utils/languages.js";
import { useHangmanGame } from "../hooks/useHangmanGame";

import Header from "/src/components/Header";
import GameStatus from "./GameStatus";
import NewGameButton from "./NewGameButton";
import Languages from "./LanguagesDisplay";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";

export default function Hangman() {
  const {
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
  } = useHangmanGame();

  return (
    <main>
      <Header />
      {!isGameWon && !isGameLost && !farewellMsg && (
        <GameStatus type="default" />
      )}
      {isGameWon && <GameStatus type="won" />}
      {isGameLost && <GameStatus type="lost" />}
      {farewellMsg && !isGameOver && (
        <GameStatus type="farawell" farawellMessage={farewellMsg} />
      )}

      <Languages wrongGuess={wrongGuess} languages={languages} />
      <WordDisplay word={word} guess={guess} isGameLost={isGameLost} />
      <Keyboard
        alphabet={alphabet}
        guess={guess}
        word={word}
        addGuess={addGuess}
        isGameOver={isGameOver}
      />
      {isGameOver && <NewGameButton onClick={resetGame} />}
    </main>
  );
}
