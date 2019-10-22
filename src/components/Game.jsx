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
      prompt: 'You Wake and bake...',
      choiceOne: 'You stay?',
      choiceTwo: 'You walk out, explore the house...',
      counter: 0
    }
  }
  displayGame = () => {
    this.setState({
      displayGame: true
    })
  }
 
  render() {

    return (

      <div>
        {this.state.gameStart ?
          <StoryDiv
            prompt={this.state.prompt}
            gameData={this.props.gameData}
            selectedPrompt={this.props.selectedPrompt}
            choiceOne={this.state.choiceOne}
            choiceTwo={this.state.choiceTwo}
            promptOne={this.promptOne}
            promptTwo={this.promptTwo}

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