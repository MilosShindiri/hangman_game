export default function Languages({ languages, wrongGuess }) {
  return (
    <section>
      <div className="languages">
        {languages.map((lang, index) => {
          const isLanguageLost = index < wrongGuess;
          return (
            <span
              className={`language ${isLanguageLost ? "lost" : ""}`}
              style={{
                backgroundColor: lang.backgroundColor,
                color: lang.color,
              }}
              key={lang.name}
            >
              {lang.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
