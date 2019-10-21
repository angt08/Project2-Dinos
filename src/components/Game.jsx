import React from 'react';
import StoryDiv from './StoryDiv';


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
      choiceOne: 'You stay?',
      choiceTwo: 'You walk out, explore the house...',
      counter :0
    }
  }
   displayGame = () => {
    this.setState({
      displayGame: true
    })
  }
      
  promptOne = (choice) => {
    if (choice) {
      this.setState({
        prompt: `you wandered into the house, it's big!!!`,
        choiceOne: 'A hidden doorway, cool',
        choiceTwo: 'the kitchen, lets eat',
        counter: 3

      })
    }

  }
  promptTwo= (choice) => {
    if (choice) {
      this.setState({
        prompt: `you wag!!!`,
        choiceOne: 'cool',
        choiceTwo: ' lets eat',
        counter: 2

      })
    }

  }
  promptThree= (choice) => {
    if (choice) {
      this.setState({
        prompt: `wababalooee!!!`,
        choiceOne: 'oh',
        choiceTwo: 'wack',
        counter: 2

      })
    }

  }



  // hidden doorway choices
  render() {
        
    return (
       
      <div>
        {this.state.gameStart ?
          <StoryDiv
            prompt={this.state.prompt}
            choiceOne={this.state.choiceOne}
            choiceTwo={this.state.choiceTwo}
            promptOne={this.promptOne} 
            promptTwo={this.promptTwo}
            promptThree={this.promptThree}
          />
          :
        
          <button onClick={this.displayGame}>
          </button>
         

         
        }
      </div>

    // .........................
      
      
      
    )
  }
}
  export default Game;