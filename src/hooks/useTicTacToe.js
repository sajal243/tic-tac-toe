import {useMemo, useState } from "react"

const initalBoard = () => {
    return new Array(9).fill(null);
}

const useTicTacToe = () => {

    const [board, setBoard] = useState(initalBoard());
    const [isXturn, setisXturn] = useState(true);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const calculateWinner = (currBoard) => {
        for(let i = 0; i < winningPatterns.length; i++){
            const [a, b, c] = winningPatterns[i];
            if(currBoard[a] && currBoard[a] === currBoard[b] && currBoard[a] === currBoard[c]){
                return currBoard[a];
            }
        }
        return null;

    }

    const getStatusMessage = useMemo(() => {
        const winner = calculateWinner(board);
        if(winner) return `Player ${winner} wins`;
        if(!board.includes(null))   return "It's a draw";
        return isXturn ? "X turn" : "O turn";
    }, [board, isXturn]);

    const handleClick = (index) => {
        const winner = calculateWinner(board);
        if(winner || board[index])    return;

        const newBoard = [...board];
        newBoard[index] = isXturn ? "X" : "O";
        setBoard(newBoard);
        setisXturn(!isXturn);

    }

    const handleResetButton = () => {
        setBoard(initalBoard());
        setisXturn(true);
    }

    return {board, getStatusMessage, handleClick, handleResetButton};
}

export default useTicTacToe;