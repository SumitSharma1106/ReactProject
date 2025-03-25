// 07-03-2025  H.W.
import React, { useState } from 'react'
import Block from './Block'
import './TicToe.css'

const TicToe = () => {
    const [values, setValues] = useState(Array(9).fill(null))
    const [isXTurn, setIsXTurn] = useState(true)

    // CheckWinner function
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (values[a] === values[b] && values[a] == values[c]) {
                return values[a]
            }
        }
        return false
    }

    // Click function for X or O
    const handleClick = (ind) => {
        const newValue = [...values]
        newValue[ind] = isXTurn ? "X" : "O"
        setValues(newValue)
        setIsXTurn(!isXTurn)
    }

    // Reset function
    const handleReset = () => {
        setValues(Array(9).fill(null))
        setIsXTurn(true)
    }

    const isWinner = checkWinner()

    return (
        <>
            <h1 style={{textAlign:"center"}}>Tic Toe Game</h1>
            <div className="container">
                <div>
                {
                    isWinner ? <><h2>{isWinner} won the game.</h2></> :
                        <>
                            <div className="row">
                                <Block value={values[0]} onClicked={() => handleClick(0)} />
                                <Block value={values[1]} onClicked={() => handleClick(1)} />
                                <Block value={values[2]} onClicked={() => handleClick(2)} />
                            </div>
                            <div className="row">
                                <Block value={values[3]} onClicked={() => handleClick(3)} />
                                <Block value={values[4]} onClicked={() => handleClick(4)} />
                                <Block value={values[5]} onClicked={() => handleClick(5)} />
                            </div>
                            <div className="row">
                                <Block value={values[6]} onClicked={() => handleClick(6)} />
                                <Block value={values[7]} onClicked={() => handleClick(7)} />
                                <Block value={values[8]} onClicked={() => handleClick(8)} />
                            </div>
                        </>
                }
                </div>
                <div className='btn'>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default TicToe
