import React, { Component } from "react";
import "./App.css";
import LetterButton from "./Components/LetterButton";
// import words from "./Data/words.json";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: []
    };
  }

  addLetterToArray = letter => {
    console.log("Works here", letter);
    const _newPickedLetter = this.state.pickedLetters.slice();
    _newPickedLetter.push(letter);
    this.setState({
      pickedLetters: _newPickedLetter
    });
  };

  render() {
    // const randomWord = Math.floor(Math.random(words[Math.floor] * 2));
    // console.log(randomWord);
    return (
      <div className="App">
        {ALPHABET.map((letter, i) => {
          return (
            <LetterButton
              key={i}
              letter={letter}
              picked={this.state.pickedLetters}
              addLetterHandler={this.addLetterToArray}
            />
          );
        })}

        <h3>Letters picked</h3>
        {this.state.pickedLetters.map((letter, i) => {
          return <div key={i}>{letter}</div>;
        })}
      </div>
    );
  }
}

export default App;
