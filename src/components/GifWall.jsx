import React from 'react';



// height="220px" width="220px"

function GifWall(props) {
  return (
    

    <div id="gif-wall">
    
      {
        props.gifs.map(gif => (
        
          <div key={gif.id} className="gif">
            
          <img src={gif.images.original.url} alt="gif" /> 
           </div>
        ))
       }
   
    </div>
  )
}

export default GifWall;