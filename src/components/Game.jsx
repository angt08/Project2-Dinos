import React from 'react';
import Adventure from './Adventure';


// let story =  //button choice
//choiceOne='' will change on click of every button
//story =''
// I need a way to make it so that when the user click a button(choice) 
//the div from 
//choice disappears and new scene/prompt in story progresses
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: true,
      prompt: 'You Wake in a strange room...',
      choiceOne: 'stay.',
      choiceTwo: 'walk out, explore the house...',
      turn: 0,
    }
  }
  displayGame = () => {
    this.setState({
      displayGame: true
    })
  }
      
  nextPrompt = (choice) => {
    if (choice) {
      this.setState({
        prompt: `you wandered into the house, it's big`,
        choiceOne: 'a hidden doorway, cool',
        choiceTwo: 'the kitchen, lets eat',
        turn: this.state.turn + 1
      })
    }

  }
  render() {
        
    return (
       
      <div id="story-div">
        {this.state.gameStart ?
          <Game prompt={this.state.prompt}
            choiceOne={this.state.choiceOne}
            choiceTwo={this.state.choiceTwo}
            nextPrompt={this.nextPrompt} /> :
          <div className="">
            <button onClick={this.displayGame}>
              ...
                </button>
            <p>
              make good choices
                </p>

          </div>
        }
      </div>
    )
  }
}
  export default Game;