import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import { StickyContainer, Sticky } from 'react-sticky';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Score from './components/Score';
import Box from './components/Box';
import cards from './cards.json';
import './App.css';



 
class App extends Component {
  
  // Saves Card Data To State
  constructor(props) {
    super(props);
    this.state = { 
      cards: cards,
      score: 0,
      highScore: 0, 
      reset: "no"
    }
  }

  // Get Data From Child Component - Set High Score
  getData = (dataFromChild) => {
    this.setState({score: this.state.score + dataFromChild}, ()=>{
      if(this.state.score > this.state.highScore){
        this.setState({highScore: this.state.score})
      }
    });
  }

  resetGame = (dataFromChild) => {
    this.setState({score: 0, reset: "yes"}, ()=>{
      this.setState({reset: "no"})
    });

  }

  // Random Shuffle Of Cards JSON Array 
  shuffle = () => {
    cards.sort(function(a, b){return 0.5 - Math.random()});
  }

  render() {
    console.log("Score: ", this.state.score);
    
    return (

      <div>
        
          <Header/>
          <StickyContainer>
            <Sticky>
              {({style})=>{   
                  return (
                    <Score
                    style={{...style}}
                    score={this.state.score}
                    highScore={this.state.highScore}
                    />
                  )
              }}       
            </Sticky>
            
        <Body>

        {this.shuffle()}

        {this.state.cards.map((card) => (
          <Box
            getData={this.getData}
            resetGame={this.resetGame}
            key={card.id}
            id={card.id}
            image={card.image}
            reload={this.reload}
            reset={this.state.reset}
          />
          ))
        }

        </Body>
        </StickyContainer>
        <Footer/>
       
      </div>
    );
  }
}

export default App;
