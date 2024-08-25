import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe';

const TicTacToe = () => {
    
    const {board, getStatusMessage, handleClick, handleResetButton} = useTicTacToe();

  return (
    <div className='game'>
        <h1>Tic-Tac-Toe</h1>
        <div className='turn_reset'>
            <div className='turn'>{getStatusMessage}</div>
            <button className='reset' onClick={handleResetButton}>Reset</button>
        </div>

        <div className='board'>
          {board?.map((b, i) => {
            return <button key={i} onClick={() => handleClick(i)} className='cell'>{b}</button>
          })}
        </div>
    </div>
  )
}

export default TicTacToe