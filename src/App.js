import React from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Button from './components/Button';
import { Route } from 'react-router-dom';
import { gifBackground } from './services/api-helper';
import Adventure from './components/Adventure';
import gameData from './resources/gamedata';
import Header from './components/Header'

// import { getOneGif } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: gameData,
      apiKey: "s30zlBX8MsUXIz2bLRUVC3NXmXujSoJj",
      gifs: [],
      emotion: ['black and white  horror films'],
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

  selectedPrompt = (option) => {
    this.setState(prevState => ({
      gameData: prevState.gameData[option]
    }))
  }


  render() {
    return (
      <div className="App">
      
        <Route exact path="/" component={Home}/>
        

          <Route path="/adventure/"
            render={() => (
              <Adventure
                gameData={this.state.gameData}
                selectedPrompt={this.selectedPrompt}
                gifs={this.state.gifs}
              />
            )} />
        
       
        <Footer />

      </div>
    );
  }
}

export default App;
