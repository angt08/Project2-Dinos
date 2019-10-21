import React  from 'react';



  function StoryDiv(props) {
  
    return (
    

    <div id="story-div" className="story-container">
      <div className="screen">
        <p>
          {props.prompt}
       </p>
        <div className="choiceOne">
          <button onClick=
            {() => {props.promptOne(props.choiceOne) }}>
            <p>
            {props.choiceOne}
            </p>
          </button>
        </div>
        
        <div className="choiceTwo">
        <button onClick=
            {() => {props.promptTwo(props.choiceTwo) }}>
            <p>
            {props.choiceTwo}
            </p>
          </button>
        </div>
      </div>
     
    </div>
  )
  }

export default StoryDiv;