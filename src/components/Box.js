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


  clickCheck = () => {
     // Updating State & Send Data To Parent
    if(this.state.clicked === "false"){
      this.setState({clicked: "true"});
      console.log("Total Clicked: ", this.state.count, " Status: ", this.state.clicked);
      this.sendData();
    } else {
      // console.log("clicked");
      
      // this.sendData();
    }
  }

  // how can i work with state
  // how can i pass informtion from a sub component state to a parent state?
  // how come i cannot write JS inside the constructors?
  // do i need the constructor(props) to initiate state?
  // exmplain the lifecycle hooks and how when to use them


  render(){
    // console.log(this.state);
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

// }

export default Box;
