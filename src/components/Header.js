    import React from "react";

const Header = (props) => {

    return (
        <div className="container-fluid no-gutters">
            <div className="row no-gutters jumbotron text-center">
                <h1 className="col-12">Cortex</h1>
                <h2 className="col-12">Test The Limits Of Your Memeory</h2>
                <h3 className="col-12">Instructions</h3>
            </div>
            <div className="row no-gutters justify-content-around">
                 <h2 className="col-12 col-md-3 score-text">Current Score: {props.score}</h2>
                 <h2 className="col-12 col-md-3 score-text">High Score: {props.highScore}</h2>   
            </div>
        </div>
    )
} 

export default Header;