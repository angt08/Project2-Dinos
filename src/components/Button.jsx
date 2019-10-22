import React from 'react';
import { Link } from 'react-router-dom';

function Button() {


  return (
    <Link to='/adventure'>
      <button id="enter-Link">
        Play
    </button>
    </Link>
  )
}
export default Button;