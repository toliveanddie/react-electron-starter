import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rando = Math.floor(Math.random() * 10) + 1;

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      count: 0
    };
  }

  clickHandler = () => {
    var a = document.getElementById('guess').value;
    this.setState({count: this.state.count + 1})
    if (a == rando) {
      this.setState({result: a + ' is Correct!'});
    } else if (a < rando) {
      this.setState({result: a + ' is too low, try again.'});
    } else {
      this.setState({result: a + ' is too high, try again'});
    }
  }

  reloadPage = () => {
    window.location.reload();
  }

  render() {
    return(
      <div>
        <h1>Guessing game. pick a number from 1 - 10</h1>
        <br></br>
        <h3>{this.state.result}</h3>
        <input id='guess' type='number'></input>
        <br></br>
        <button id='enter' className='btn btn-primary' onClick={this.clickHandler}>Enter</button>
        <br></br>
        <button id='pick'className='btn btn-info' onClick={this.reloadPage}>Guess a new number</button>
        <br></br>
        <p>guesses: {this.state.count}</p>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));