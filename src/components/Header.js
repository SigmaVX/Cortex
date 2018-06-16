    import React from "react";

const Header = (props) => {

    return (
        <div className="container-fluid no-gutters">
            <div className="row no-gutters jumbotron text-center">
                <h1 className="col-12">Cortex</h1>
                <h2 className="col-12">Test The Limits Of Your Memeory</h2>
                <h3 className="col-12">Click An Image...But Don't Click It Twice</h3>
            </div>
            <div className="row no-gutters justify-content-around score-card" id="score-card">
                 <h3 className="col-12 col-md-3 score-text">Current Score: {props.score}</h3>
                 <h3 className="col-12 col-md-3 score-text">High Score: {props.highScore}</h3>   
            </div>
        </div>
    )
} 

export default Header;