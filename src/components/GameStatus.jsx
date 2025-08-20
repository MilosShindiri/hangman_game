import Confetti from "react-confetti";

export default function GameStatus({ type, farawellMessage }) {
  if (type === "default") {
    return (
      <>
        <section className="statusDefault"></section>
      </>
    );
  }

  if (type === "won") {
    return (
      <>
        <Confetti style={{ position: "absolute", top: 0, left: 0 }} />
        <section className="statusWon">
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </section>
      </>
    );
  }

  if (type === "lost") {
    return (
      <section className="statusLost">
        <h2>Game over!</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </section>
    );
  }

  if (type === "farawell") {
    return <section className="farawellMessage">“{farawellMessage}”</section>;
  }

  return null;
}
