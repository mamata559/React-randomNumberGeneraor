// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomValue = () => Math.ceil(Math.random() * 100)

  getRandomNumber = () => {
    const randomValue = this.generateRandomValue()

    this.setState({count: randomValue})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
