const gameData = {

  prompt: `You wake in a strange room, you look out the window it's
   getting darkyou don't kno where you are..`,
  "Stay in here?": {
    prompt: "The nightman cometh, you shant be spared, Goodbye...",
  },

  " Explore the house": {
    prompt:"You've ventured into the house ",
    "You found the kitchen?...chow time": {

     prompt: "A banquet, sweet!",
      "Let's try this roast mutton": {
              prompt:"Does this  mutton taste funny to you?..",
      },
      "drink this wine,from this fine looking chalice": {
              prompt: " Hey man, I don't think that was wine..",
        
      },
    },

    "Hey there's a hidden doorway here explore... ": {
              prompt: " A beast lies here, you've woken it, it begins to charge at you...",
    "You're no wimp,fight!...": {
              prompt:" Oh, What made you think you could take on an unknown beast with no weapons or armor?",
      },
      "Nah, run! run so fast!": {
              prompt: `You've run out the house, but you're in the middle of nowhere...`,
        "Run into the woods": {
              prompt: "Running into the woods, classic ",
          " ":null,
          " ":null,
        },
        "Walk around the house, maybe there's a shed":null,
      },
      
    }
  }
}
export default gameData;