import React from 'react'

// let story =  //button choice
//choiceOne='' will change on click of every button
//story =''
// I need a way to make it so that when the user click a button(choice) 
//the div from 
//choice disappears and new scene/prompt in story progresses
export default function TextGame(props) {
  

  return (

    <div id="text-story">
      <h3>Here we'll begin  the game?</h3>
       {/* there has to be a way for me to render the next prompt/scene 
        as the user  clicks button and story progresses */}                              
      <p>You wake  in a strange room... </p>
      <button name="stay">Stay</button>
      <button name="walk out">Walk out explore the house..</button>
      {/* if user decides to stay, nothing  happensgame ends,
       gif renders upon choice */}
      <p>you've stayed.. the night man won't spare you, goodbye</p>

      <p>You’ve ventured off , this house is...</p>
      <button name="hidden-doorway">a hidden doorway, explore..</button>
      <button name="kitchen">you've found the kitchen, let's eat..</button>

      {/* hidden-dorway choices  */}
      <p>A monster lives here, you’ve woken it!...</p>
      <button name="fight">fight for you life!</button>
      <button name="run">Run!Run so fast it hurts..</button>

      {/* run away */}
      <p>yea, I'd run to, Who knows how strong that thing is!... </p>
      {/* end game here gif renders */}

      {/*fights  */}
      <p>You’ve chosen to fight the Monster, how brave, 
        a reward for your tenacity young imp...</p>
      {/* gmae ends a gif is rendered */}
      

      {/* kitchen exploration */}
      <p>This Banquet, looks delicious, no one’s around ...</p>
      <button name="eat">eat some apple pie</button>
      <button name="drink">drink this wine? from this sweet lookin chalice..</button>
   </div>
   

 )
 console.log('click')
}