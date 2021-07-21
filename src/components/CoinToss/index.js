import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    totalHeads: 0,
    totalTails: 0,
    isHeads: true,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        totalHeads: prevState.totalHeads + 1,
        isHeads: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        totalTails: prevState.totalTails + 1,
        isHeads: false,
      }))
    }
  }

  render() {
    const {total, totalHeads, totalTails, isHeads} = this.state
    const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const imgUrl = isHeads ? headsImg : tailsImg
    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-description">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="toss-img" />
          <div>
            <button
              type="button"
              onClick={this.onClickToss}
              className="toss-btn"
            >
              Toss Coin
            </button>
          </div>
          <div className="toss-result-container">
            <p className="toss-result">Total: {total}</p>
            <p className="toss-result">Heads: {totalHeads}</p>
            <p className="toss-result">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
