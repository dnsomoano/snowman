# title: Do you want to build a Snowman? #
# draft: true #
In this assignment, you'll build a less grim variation of a popular game:

Snowman
https://raw.githubusercontent.com/suncoast-devs/handbook/master/curriculum/front-end/react-ii/assignments/assets/snowman.gif

Objectives
* Reinforce component architecture in React
* Effective use props and state in React
Requirements
- - - - - - -
We're going to build a sort of reverse hangman. The player can't lose; they just get to build a snowman by adding parts each time they guess a letter correctly.

You will need to download these files and add them to your project:

1. Word List
2. Snowman Images (Unzip these before adding to your project)
## Explorer Mode ##
- [ ] Selects a random word from the list and display a number of blank spaces (or underscores) equal to the word length.
- [ ] Display a list of letters, A through Z as clickable buttons.
- [ ] When the player guesses a letter (clicks the button):
  - [ ] All instances of that letter are revealed at their corresponding positions in the word.
  - [ ] The button becomes disabled, as it has already been guessed.
  - [ ] Display the snowman image that corresponds with the number of letters revealed in the word.
## Adventure Mode ##
- [ ] After the word has been completed, offer the player to play again. Reset the state of the game without a page reload.
## Epic Mode ##
Refactor the game to play like a traditional "hangman" game:

- [ ] If the chosen letter is not part of the word, the snowman "grows"; increase a counter by one for each incorrect guess.
- [ ] If the snowman is completed (counter reaches 7) before the word is completed, the player loses, and the snowman wins.

---------------------------------------------------------------------------------------------------------------
DAY 2
---------------

# title: It doesn't have to be a snowman? #
# draft: true #
Yesterday, you started to built the game Snowman

## Objectives ##
- - - - - - - - -
* Reinforce component architecture in React
* Effective use props and state in React
* Practice refactoring and CSS
* Work with an existing code base
## Requirements ##
- - - - - - - - - -
* Continue to work on and improve an existing project
### Explorer Mode ###
- [ ] Complete explorer, adventure mode, and epic mode from last night's Snowman
### Adventure Mode ###
- [ ] Expand your word to include words of varying lengths and to have words with multiple letters (You can use this as inspiration Expanded word list)
### Epic Mode ###
- [ ] Create different word lists and let the user choose the theme. Example, create a word list that is only animals, and have only the words come from that list.