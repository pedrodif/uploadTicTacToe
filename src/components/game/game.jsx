import React from "react";
import Board from "../board";
import Titulo from "../titulo";
import './estilo.css';


function Game() {
    return(
      <div className="game">
        <div className="game-board">
          <Titulo />
          <Board />
        </div>
      </div>
    )
}

export default Game;