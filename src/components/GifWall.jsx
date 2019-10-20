import React from 'react';

function GifWall(props) {
  return (

    <div id="gif-wall">
      
      {
        props.gifs.map(gif => (
        
          <div key={gif.id} className="gif">

          <img src={gif.images.original.url} alt="gif"height="220px" width="220px"/>
                
           </div>

        ))
       }
   
    </div>
  )
}

export default GifWall;