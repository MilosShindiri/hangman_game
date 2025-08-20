import { mapButtonClassesForGuessedButton } from "../../utils/utils";

export default function Keyboard({
  alphabet,
  guess,
  addGuess,
  isGameOver,
  word,
}) {
  return (
    <section>
      <div className="keyboard">
        {alphabet.split("").map((character, index) => {
          return (
            <button
              className={mapButtonClassesForGuessedButton({
                character,
                guess,
                word,
              })}
              key={index}
              onClick={() => addGuess(character)}
              disabled={isGameOver}
            >
              {character.toUpperCase()}
            </button>
          );
        })}
      </div>
    </section>
  );
}
