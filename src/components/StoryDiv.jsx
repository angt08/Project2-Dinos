import React from 'react';



function StoryDiv(props) {

  return (


    <div className="story-container">
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
          //this filets through the object keys in my gameData.js so when the user clicks it only renders the  option for that prompt  and it renders the 'option' in that prompt in the <p> tag.
          <div className="choiceOne" key={index} >

            <button  className="story-buttons" onClick={() => props.selectedPrompt(option)}>
              {option}
             {/* <p>
             </p> */}
            </button>
            
          </div>
        ))}

      </div>

    </div>




  )
}

export default StoryDiv;