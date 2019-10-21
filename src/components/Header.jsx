import React from 'react';
import {Link } from 'react-router-dom';

const  Header=() =>{
 
  return (
    <div id="header">

      <nav>
      <h1 className="gallery-word">Angies' Horror Arcade</h1>
        <Link to='/'>
          <>Home</>
        </Link>
      </nav>
     </div>
)
}
export default Header;