import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import Hello from './hello'
// import { getStackTraceLines } from 'jest-message-util';
// what is these?
// import { tsThisType } from '@babel/types';
// import { shouldInstrument } from 'jest-runtime';

// render(<Hello />, document.getElementById('main')  );

// const Hello = props => {
//     return( <h1>Hello Reactuuuuuuuuuuuu!!!!!</h1>);
// };

// export default Hello;

function calculateWinner(squares) {
    const line = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < line.length; i++) {
        const [a, b, c] = line[i];
        if (squares[a] && squares[a] == squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function getWinnerStatas(winner, next) {
    if (winner) {
        return 'Winner: ' + winner;
    } else {
        return 'Next player: ' + (next ? 'X' : 'O');
    }
}

const Square = props => {
    return (
        <button
            className="square"
            onClick={() => { props.onClick() }}
        >
            {props.value}
        </button>
    );
}


class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }


    render() {
        const firstAxis = Array.from(Array(this.props.firstAxis || 3).keys());
        const secondAxis = Array.from(Array(this.props.secondAxis || 3).keys());

        return (
            <div>
                {firstAxis.map((fn) => {
                    return (
                        <div className="board-row">
                            {secondAxis.map((sn) => {
                                return this.renderSquare(fn * 3 + sn)
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

const JumpTo = props => {
    return (
        <li key={props.move}>
            <button onClick={props.onClick}>{props.desc}</button>
        </li>
    );
};

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status = getWinnerStatas(winner, this.state.xIsNext);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move :
                'Go to game start';
            return (
                <JumpTo move={move} onClick
                    ={() => this.jumpTo(move)} desc={desc} />
            )
        })


        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares}
                        onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>

                </div>
            </div>
        );
    }
};

render(
    <Game />,
    document.getElementById('main')
);




