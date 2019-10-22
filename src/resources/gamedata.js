const gameData = {

  prompt: "You wake in a strange room...",
  "Stay in here?": {
    prompt: `the night man cometh, you shant be spared..goodbye`
  },

  " Explore the house": {
    prompt:"You've ventured into the house ",
    "Is this the kitchen?...chow time": {

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
      prompt:" Oh, What made you think you could take on a beast with no weapons or armory?",
      },
      "Nah, run! run so fast!": {
        prompt: `You've run out the house, but you're in the middle of nowhere...`,
        "Run into the woods": null,
        "Walk around the house, maybe there's a shed":null,
      },
      
    }
  }
}
export default gameData;