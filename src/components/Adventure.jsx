import React from 'react';
import GifWall from './GifWall';
import Game from './Game';
import { Link } from 'react-router-dom';




const Adventure = (props) => {

  return (

    <>

      <header id="adventure-header">
        <Link to='/'>
          Home 
        </Link>
      </header>
      <Game
        gameData={props.gameData}
        selectedPrompt={props.selectedPrompt}
        endingGif={props.endingGif}
      />

      <GifWall gifs={props.gifs} />

    </>
  )
}
export default Adventure;