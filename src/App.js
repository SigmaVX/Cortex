import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
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
      listDataFromChild: null
    }
  }

  // Get Data From Child Component
  getData = (dataFromChild) => {
    this.setState({ listDataFromChild: dataFromChild });
  }

  // Random Shuffle Of Cards JSON Array 
  shuffle = () => {
    cards.sort(function(a, b){return 0.5 - Math.random()});
    // this.setState({cards: cards});s
  }

  reload = () => {
    window.location.reload();
  }


  render() {
    console.log(this.state.listDataFromChild);
    return (

      <div>
        <Header/>
        <Body>

        {this.shuffle()}

        {this.state.cards.map((card) => (
          <Box
          getData={this.getData}
          key={card.id}
          id={card.id}
          image={card.image}
          reload={this.reload}

          />
        ))}



        </Body>
        <Footer/>
      </div>
    );
  }
}

export default App;
