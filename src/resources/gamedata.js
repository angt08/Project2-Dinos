
const gameData = {

  prompt: `You wake in a study room, peer out a window.
  It's getting dark out there, you don't know where you are.
  You check yourself, you're not in pain, you're dressed for a formal event, what is going on...`,
  "Stay in this study ?": {
    
    prompt: "The nightman cometh, you shant be spared, Goodbye...",
  },

  "Explore the house":{
        prompt:"You've ventured into the house ",
    "You found the kitchen...chow time": {

        prompt: "A banquet, sweet!",
      "Let's try this roast mutton": {
        prompt: "Does this  mutton taste funny to you?..",
        
      },

      "Drink this wine,from this fine looking chalice": {
        prompt: " Hey man, I don't think that was wine..",
        
      },
    },

    "Hey there's a hidden doorway here explore... ": {
        prompt: " A beast lies here, you've woken it, it begins to charge at you...",
      
    "You're no wimp,fight!...": {
      prompt: `Oh, 
        What made you think you could take on an unknown beast with no weapons or armor?`,
      },
      "Nah, run! run so fast!": {
        prompt: `You've run out the house,
                 but you're in the middle of nowhere...`,
        "Run accross a road and into the woods": { 
        prompt: "Running into the woods, classic ",
          "Drop to the ground ,ball up, begin to ugly cry silently...":  {
            prompt: "Wait,sshh, you hear whispering nearby..take a look",
            "There's a figure in the distance frantically waving..seee what it is..": {
              prompt:" Nice! You army crawled your way to a scarecrow, cry into it while I continue writing the rest of this story...To be continued",
            },
            
            "Stay where you are..keep ugly crying into the grass": {
              prompt:"To be continued...maybe aliens take you?"
            }
          },
          "Run back to the house": {
            prompt:"Don't come into this house panting! The beast will hear you, gather yourself while I finish writing this ...To be Continued",
          },
          
        },
        "Walk around the house, maybe there's a shed": { 
                prompt:"No shed, there's a path to the gated garden, try that..",
        },

      },
      
    }
  }
}
export default gameData;