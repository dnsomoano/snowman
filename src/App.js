import React, { Component } from "react";
import "./App.css";
import LetterButton from "./Components/LetterButton";
import words from "./Data/words.json";
import snowman0 from "./assets/step_0.png";
import snowman1 from "./assets/step_1.png";
import snowman2 from "./assets/step_2.png";
import snowman3 from "./assets/step_3.png";
import snowman4 from "./assets/step_4.png";
import snowman5 from "./assets/step_5.png";
import snowman6 from "./assets/step_6.png";
import snowman7 from "./assets/step_7.png";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const snowmen = [
  { display: snowman0, value: 0 },
  { display: snowman1, value: 1 },
  { display: snowman2, value: 2 },
  { display: snowman3, value: 3 },
  { display: snowman4, value: 4 },
  { display: snowman5, value: 5 },
  { display: snowman6, value: 6 },
  { display: snowman7, value: 7 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedLetters: [],
      secret: [],
      snowman: snowmen[0].display
    };
  }

  // generate secret word randomly
  generateSecret = () => {
    const inGame = "Must finish game first!";
    if (this.state.secret.length > 0) {
      return inGame;
    } else {
      const randomWord = Math.floor(Math.random() * words.length);
      // TODO return underscores
      const underscores = "_".repeat(words[randomWord].length).split("");
      this.setState({
        secret: words[randomWord]
      });
    }
  };

  // Adding letter to array for picked
  addLetterToArray = letter => {
    console.log("Works here", letter);
    const _newPickedLetter = this.state.pickedLetters.slice();
    _newPickedLetter.push(letter);
    this.setState({
      pickedLetters: _newPickedLetter
    });
    this.compareLettersToWord(this.state.pickedLetters);
    // Start of comparison between letter picked and secret word
    // const _secretWord = this.state.secret;
    // let matched = 0;
    // for (let index = 0; index < _secretWord.length; index++) {
    //   console.log("checking", _secretWord[index]);
    //   if (this.state.pickedLetters.includes(_secretWord[index])) {
    //     console.log("matched", _secretWord[index]);
    //     matched++;
    //     let _nextSnowman = snowmen[0 + matched].display;
    //     this.setState({
    //       snowman: _nextSnowman
    //     });
    //     console.log(snowman1);
    //   } else if (this.state.snowman.value === 7) {
    //     this.setState({
    //       pickedLetters: [],
    //       secret: [],
    //       snowman: snowmen[0].display
    //     });
    //   }
    // }
  };

  // Compare every letter of chosen to every letter of secret
  compareLettersToWord = () => {
    const _secretWord = this.state.secret;
    // // dbg
    // console.log(typeof this.state.pickedLetters);
    // console.log(this.state.pickedLetters);
    let matched = 0;
    for (let index = 0; index + 1 < _secretWord.length; index++) {
      console.log("checking", _secretWord[index]);
      if (this.state.pickedLetters.includes(_secretWord[index])) {
        console.log("matched", _secretWord[index]);
        matched++;
        let _nextSnowman = snowmen[0 + matched].display;
        this.setState({
          snowman: _nextSnowman
        });
        console.log(snowman1);
      } else if (this.state.snowman.value === 7) {
        return this.setState({
          pickedLetters: [],
          secret: [],
          snowman: snowmen[0].display
        });
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
          <img
            className="snowman-image"
            src={this.state.snowman}
            alt="snowman"
          />
        </section>
        {/* Test inputs */}
        <section>
          <button
            onClick={() => {
              this.generateSecret(this.state.secret);
            }}
          >
            New Game
          </button>
          {/* underscores */}
          <section>
            {this.state.secret.map(i => {
              return <span key={i}>_</span>;
            })}
          </section>
        </section>
        {/*  */}
        <h3>Letters picked</h3>
        {this.state.pickedLetters.map((letter, i) => {
          return <div key={i}>{letter}</div>;
        })}
      </div>
    );
  }
}

export default App;
