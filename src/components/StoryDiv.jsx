import React from 'react';



function StoryDiv(props) {

  return (


    <div id="story-div" className="story-container">
      <form>
        <button id="reset-button">
          Reset
        </button>
      </form>
      <div className="screen">
     
        <p>
          {props.gameData.prompt}
        </p>

        {Object.keys(props.gameData).filter(option => option !== "prompt").map((option, index) => (
          <div className="choiceOne" key={index} >

            <button onClick={() => props.selectedPrompt(option)}>
              <p>
                {option}
              </p>
            </button>
            
          </div>
        ))}
        {props.endingGif && <img src={props.endingGif}/>}

      </div>

    </div>




  )
}

export default StoryDiv;