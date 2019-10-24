import React from 'react';
import { Link } from 'react-router-dom';
import scurry from '../scurry.mp3';


class Button extends React.Component {
  constructor() {
    super();
  }
  render() {
    let audioScurry = new Audio(scurry);

      return (
        <Link to='/adventure'>

        <button id="enter-Link" onClick={async () =>
        await audioScurry.play()}>
            Play Here
        </button>
        </Link>
      )
 }
}
export default Button;