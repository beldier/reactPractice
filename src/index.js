import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

  render() {
    return (
      <button className="square" 
              onClick={()=> this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
class Boton extends React.Component {
  fail(){
    console.log('boton log')
  }
  render() {
    const auxiliar = 'help me';
    return (
      <div>
      <button className = "boton"
               onClick={()=>this.props.onClick()}>{this.props.palabra}</button>
      <p>fk</p>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={()=> this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

class Name extends React.Component {
  render()
  {
    return(
      <div>
        <p className="tag-name">Show me your game</p>
      </div>
    );
  }
}
class Auxiliar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      palabra :"joder",
    }
  }
  imprimirMetodo(){
    console.log("imprimido");
    this.setState({palabra:'nueva'});  
    console.log(this.state.palabra)
    
  }
  render(){
    return(
      <Boton 
      palabra={this.state.palabra}  
      onClick={()=> this.imprimirMetodo()}/>
    );
  }
}
class Starter extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return [
      <Game />,
      <Name />,
      <Auxiliar />
    ]
  }
}

ReactDOM.render(
  //<Game />,
  <Starter />,
  document.getElementById('root')
);
