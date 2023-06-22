import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/words";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import StartScreen from "./components/StartScreen";

const stages = [
  {
    id: 1,
    name: "start"
  },
  {
    id: 2,
    name: "game"
  },
  {
    id: 3,
    name: "end"
  },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [pickedWord, setpickedWord] = useState(""); 
  const [pickedCategory, setPickedCategory] = useState(""); 
  const [letters, setLetters] = useState([]);
  const [words] = useState(wordsList);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    let wordLetter = word.split("");
    wordLetter = wordLetter.map((l) => l.toLowerCase());

    setpickedWord(word);
    setLetters(wordLetter);
    setPickedCategory(category);
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="app">
      {gameStage === 'start' &&  <StartScreen startGame={startGame}/>}
      {gameStage === 'game' &&  <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' &&  <GameOver retry={retry}/>}
    </div>
  )
}

export default App
