import { words } from "./words";
import { clsx } from "clsx";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function getFarewellText(language) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

export const mapButtonClassesForGuessedButton = ({
  guess,
  character,
  word,
}) => {
  const isGuessed = guess.includes(character);
  const isCorrect = isGuessed && word.includes(character);
  const isWrong = isGuessed && !word.includes(character);
  return clsx("character", {
    correct: isCorrect,
    wrong: isWrong,
  });
};
