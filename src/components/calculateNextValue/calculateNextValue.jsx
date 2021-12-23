import React from "react";

// Funções do resultado do jogo

const calculateNextValue = function calculateNextValue(squares) {
    // verificando o que está sendo impresso com console.log(squares.filter(Boolean));
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

export default calculateNextValue; 