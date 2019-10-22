import React from 'react';



function StoryDiv(props) {

  return (


    <div id="story-div" className="story-container">
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



        {/* <div className="choiceTwo">
          <button onClick=
            {() => {
              props.promptTwo(props.choiceTwo, `what's this,a hidden doorway..explore`, `yabadaba dooo`, `rooby doooby dooo`)
            }}>
            <p>
              {props.choiceTwo}
            </p>
          </button>
        </div> */}
      </div>

    </div>




  )
}

export default StoryDiv;