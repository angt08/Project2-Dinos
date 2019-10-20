import React from 'react';
import axios from 'axios';
import './App.css';
import Game from './components/Game';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GifWall from './components/GifWall';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { gifBackground } from './services/api-helper';
import Nav from './components/Nav';




class App extends React.Component {
  constructor(props) {
  super(props);
  this.state= {
    apiKey: "s30zlBX8MsUXIz2bLRUVC3NXmXujSoJj",
    gifs: [],
    emotion: ['classic horror'],
//a set of emotions to loop through everytime user loads game pg
  }
}

async componentDidMount() {
  
  const gifs= await gifBackground(this.state.apiKey, this.state.emotion)
  console.log(gifs)
  this.setState({
   gifs:gifs
    
  })
  console.log(this.state)

  
}

  
  

  render() {
    return (
      <div className="App">
     
      
        
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} /> 
      <GifWall gifs={this.state.gifs} />
        
    <Footer />

      </div>
    );
  }

   }

export default App;
