import React, { Component } from "react";
import "./App.css";
import LetterButton from "./Components/LetterButton";
// TODO
import words from "./Data/words.json";
import snowman0 from "./assets.step_0.png";
import snowman1 from "./assets.step_1.png";
import snowman2 from "./assets.step_2.png";
import snowman3 from "./assets.step_3.png";
import snowman4 from "./assets.step_4.png";
import snowman5 from "./assets.step_5.png";
import snowman6 from "./assets.step_6.png";
import snowman7 from "./assets.step_7.png";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: [],
      // test key values
      secret: [],
      // picked: []
      snowman: snowman0
    };
  }

  // Adding letter to array for picked
  addLetterToArray = letter => {
    console.log("Works here", letter);
    const _newPickedLetter = this.state.pickedLetters.slice();
    _newPickedLetter.push(letter);
    this.setState({
      pickedLetters: _newPickedLetter
    });
  };

  // generate secret word randomly
  // TODO
  generateSecret = () => {
    const randomWord = Math.floor(Math.random() * words.length);
    const underscores = "_".repeat(words[randomWord].length).split("");
    this.setState({
      secret: words[randomWord]
    });
    return underscores;
  };

  // Compare every letter of chosen to every letter of secret
  compareLettersToWord = event => {
    const _secretWord = this.state.secret;
    // dbg
    console.log(typeof this.state.pickedLetters);
    console.log(this.state.pickedLetters);
    for (let index = 0; index < _secretWord.length; index++) {
      console.log("checking", _secretWord[index]);
      if (this.state.pickedLetters.includes(_secretWord[index])) {
        console.log("matched", _secretWord[index]);

        // return <div>{index}</div>;
      }
    }
  };

  render() {
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
        <section className="image-container">
          <img src={this.state.snowman} />
        </section>
        {/* Test inputs */}
        <section>
          <button onClick={this.generateSecret}>New Game</button>
          {/* key functionality */}
          <section>
            <button onClick={this.compareLettersToWord}>Compare Letters</button>
          </section>
        </section>
        {/*  */}
        {/* <section></section> */}
        <h3>Letters picked</h3>
        {this.state.pickedLetters.map((letter, i) => {
          return <div key={i}>{letter}</div>;
        })}
      </div>
    );
  }
}

export default App;
