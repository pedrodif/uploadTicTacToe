import React from "react";


// Funções do resultado do jogo

const calculateStatus = function calculateStatus(winner, squares, nextValue) {
    return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

export default calculateStatus; 