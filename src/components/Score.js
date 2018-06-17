import React from 'react';


class Score extends React.Component {

    render() {
      return (
        <div className="row no-gutters text-center score-card pt-3" id="score-card" style={this.props.style}>
            <h3 className="col-12 score-text">My Score: {this.props.score} | High Score: {this.props.highScore} </h3>
            <h3 className="col-12 score-text" id="prompt-text"></h3>
        </div>
      )
    }
}
    
  export default Score;