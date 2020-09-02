import React, { Component} from 'react';
import '../style/MemorizeBoard.css';
import FrontImg from "../img/Avatar.png";
import FlipCard from 'react-flipcard-2';

class MemorizeCard extends Component {
  state = {
    isFlipped: false,
    flipped: []
  }

  render() {
    return (
        <div className="card" onClick={this.props.selectCard}>
          <FlipCard isFlipped={this.props.beingCompared || this.props.wasMatched}>
            <div className="front card">
              <div className="memorize-image-container">
                <img src={FrontImg} alt="" />
              </div>
            </div>
            <div className="back card">
              <div className="memorize-image-container">
                <img src={this.props.src.img} alt="" />
              </div>
            </div>
          </FlipCard>
        </div>
    );
  }
}

export default MemorizeCard;