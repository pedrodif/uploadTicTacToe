import React from "react";
import calculateNextValue from "../calculateNextValue";
import calculateWinner from "../calculateWinner";
import calculateStatus from '../calculateStatus';
import './estilo.css';

//Criando o Tabuleiro do Jogo
const Board  = function Board() {
    const[squares, setSquares] = React.useState(Array(9).fill(null))
  
    const nextValue = calculateNextValue(squares)
    const winner = calculateWinner(squares)
    const status = calculateStatus(winner, squares, nextValue)
    
    function selectSquare(square) {
      if (winner || squares[square]) {
        return
      }
      const squaresCopy = [...squares]
      squaresCopy[square] = nextValue
      setSquares(squaresCopy)
    }
  
    function restart() {
      setSquares(Array(9).fill(null))
    }
    
    function renderSquare(i) {
      return(
        <button className="square" onClick={() => selectSquare(i)}>
          {squares[i]}
        </button>
      )
    }
  
    return(
      <div className="position">
  
        <div className="status">{status}</div>
  
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
  
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
  
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
  
        <button className="restart" onClick={restart}>
          RESTART
        </button>
      </div>
    )
}

export default Board;