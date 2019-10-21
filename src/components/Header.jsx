import React from 'react';
import {Link } from 'react-router-dom';

const  Header=() =>{
 
  return (
    <div id="header">
      <h1 className="gallery-word">Angies' Horror Arcade</h1>
        <Link to='/'>
          <>Home</>
        </Link>
      
     </div>
)
}
export default Header;