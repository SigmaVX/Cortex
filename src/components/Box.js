import React from "react";

class Box extends React.Component{

  // Set Up Inital State
  constructor(props) {
    super(props);
    this.state = {
      clicked: "false",
      count: 0
    };
  }

  // Send Data To Parent (AKA App.JS)
  sendData = () =>{
    this.props.getData(this.state.count);
  }

  // Send Data To Parent To Reset Score
  resetGame = () =>{
    this.props.resetGame();
  }

  clickCheck = () => {
    
    // Updating State & Send Data To Parent With Callback To Run Async (Important!)
    if(this.state.clicked === "false"){
      this.setState({clicked: "true", count: 1}, () => {
        console.log("Total Clicked: ", this.state.count, " Status: ", this.state.clicked);
        this.sendData();    
      });
      
    } else {
      this.resetGame();
    }
  }

  render(){
    return (
        <div 
          className="card col-2 mx-2 my-2" 
          key={this.props.id} 
          id={this.props.id}
          clicked={this.state.clicked} 

          onClick={() => this.clickCheck()}>
          <img alt="Memory Item" src={this.props.image} />
          {this.state.clicked}
        </div>
      )
  };
}

export default Box;
