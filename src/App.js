import React, { Component } from "react";
import "./App.css";
import words from "./Data/words.json";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

class App extends Component {
  render() {
    // const randomWord = Math.floor(Math.random(words[Math.floor] * 2));
    // console.log(randomWord);
    return (
      <div className="App">
        {ALPHABET.map((letter, i) => {
          return <button key={i}>{letter}</button>;
        })}
      </div>
    );
  }
}

export default App;
