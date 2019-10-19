import React from 'react';
// import axios from 'axios';
import './App.css';
import TextGame from './components/TextGame';
import Home from './components/Home';
import Header from './components/Header';
// import {Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';




class App extends React.Component {
  constructor(props) {
    super(props);
  this.state= {
      testButton:'Boop',
  }
}

  // async componentDidMount() {
  //    const gifs = await 
  //  }

  render() {
     
    return (
      <div className="App">
     
        <Header/>

        <TextGame />

        <Home/>
  
      </div>
    );
  }

   }

export default App;
