import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Box from './components/Box';
import cards from './cards.json';
import './App.css';

class App extends Component {
  
  // Saves Card Data To State
  state = { cards: cards }
  
  render() {
    return (

      <div>
        <Header/>
        <Body>
          
        {this.state.cards.map(card=> (
          <Box
          key={card.id}
          id={card.id}
          image={card.image}
          // removeFriend={this.removeFriend}
          />
        
        ))}


        </Body>
        <Footer/>
      </div>
    );
  }
}

export default App;
