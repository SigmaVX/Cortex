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

 

  shuffle = () => {
    const order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    order.sort(function(a, b){return 0.5 - Math.random()});
    console.log(order);
    // return order;
  }
  
  render() {
    return (

      <div>
        <Header/>
        <Body>

          {this.shuffle()}

          {this.state.cards.map((card,i) => (
            <Box
            key={card.id}
            id={card.id}
            image={card.image}
            order={card.order}
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
