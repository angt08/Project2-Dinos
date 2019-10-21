import React from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import GifWall from './components/GifWall';
import {Route } from 'react-router-dom';
import { gifBackground } from './services/api-helper';
// import { getOneGif } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state= {
    apiKey: "s30zlBX8MsUXIz2bLRUVC3NXmXujSoJj",
    gifs: [],
    emotion: ['dark movies'] ,
    // oneGif:'UjYw9fdCEPwU8'
//a set of emotions to loop through everytime user loads game pg
  }
}
async componentDidMount() {
  
  const gifs = await gifBackground(this.state.apiKey, this.state.emotion)
  // const  oneGif= await getOneGif (this.state.apiKey, this.state.gif_id)
  console.log(gifs)
  this.setState({
    gifs: gifs,
  
  })
  console.log(this.state) 
}
  
  
  render() {
    return (
      <div className="App"> 
     
    <Route exact path="/" component={Home} />   
        
    <Route path="/adventure"
          render={() => (
            < Game /> ,
            <Header /> ,
            <GifWall gifs={this.state.gifs} />
          )} />
         
      
      {/* <GifWall gifs={this.state.gifs} />  */}
        
      <Footer />
      </div>
    );
  }
  }

export default App;
