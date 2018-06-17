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

  // Loops Through All Boxes To Check If Reset Is Active And Changes State
  componentDidUpdate() {
    if (this.props.reset === "yes" && this.state.clicked === "true") {
      this.setState({clicked: "false"})
    }
  }

  // Send Data To Parent (AKA App.JS)
  sendData = () =>{
    this.props.getData(this.state.count);
  }

  // Send Data To Parent To Reset Score
  resetGame = () =>{
    this.props.resetGame();
  }

  // Checks If Box Has Been Checked
  clickCheck = () => {
    
    // Updating State & Send Data To Parent With Callback To Run Async (Important!)
    if(this.state.clicked === "false"){
      this.setState({clicked: "true", count: 1}, () => {
        console.log("Total Clicked: ", this.state.count, " Status: ", this.state.clicked);
        document.getElementById("prompt-text").innerHTML = "Correct!";
        document.getElementById("prompt-text").setAttribute("class", "col-12 score-text correct animated tada");
        this.sendData(); 
      });
      
    } else {
      document.getElementById("prompt-text").innerHTML = "Wrong Guess - Score Reset!";
      document.getElementById("prompt-text").setAttribute("class", "col-12 score-text wrong animated shake");
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
        </div>
      )
  };
}

export default Box;
