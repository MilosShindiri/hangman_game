export default function WordDisplay({ word, guess, isGameLost }) {
  return (
    <section>
      <div className="displayWord">
        {word.split("").map((letter, index) => (
          <span
            className={`letter ${
              isGameLost && !guess.includes(letter) ? "missed-letter" : ""
            }`}
            key={index}
          >
            {isGameLost || guess.includes(letter) ? letter.toUpperCase() : ""}
          </span>
        ))}
      </div>
    </section>
  );
}
