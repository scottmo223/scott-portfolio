"use client";
import React, { useState } from "react";

type Cell = {
    mine: boolean;
    revealed: boolean;
    flagged: boolean;
    numberBombs: number;
};

const ROWS = 10;
const COLS = 10;
const MINES = 10;

function generateBoard(): Cell[][] {
    const board: Cell[][] = Array.from({ length: ROWS }, () =>
        Array.from({ length: COLS }, () => ({
            mine: false,
            revealed: false,
            flagged: false,
            numberBombs: 0,
        }))
    );

    // Place mines
    let numMines = 0;
    while (numMines < MINES) {
        const row = Math.floor(Math.random() * ROWS);
        const col = Math.floor(Math.random() * COLS);
        if (!board[row][col].mine) {
            board[row][col].mine = true;
            numMines++;
        }
    }

    // Calculate numberBombs
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (!board[i][j].mine) {
                let num = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (
                            i + x >= 0 &&
                            i + x < ROWS &&
                            j + y >= 0 &&
                            j + y < COLS &&
                            board[i + x][j + y].mine
                        ) {
                            num++;
                        }
                    }
                }
                board[i][j].numberBombs = num;
            }
        }
    }

    return board;
}

export default function Minesweeper() {
    const [board, setBoard] = useState<Cell[][]>(generateBoard());
    const [revealed, setRevealed] = useState(0);
    const [flags, setFlags] = useState(0);
    const [gameStatus, setGameStatus] = useState<null | "win" | "lose">(null);

    // Helper to reset the game
    function startNewGame() {
        setBoard(generateBoard());
        setRevealed(0);
        setFlags(0);
        setGameStatus(null);
    }

    // Handle left click (reveal)
    function handleCellClick(row: number, col: number) {
        if (gameStatus || board[row][col].flagged || board[row][col].revealed) return;

        if (board[row][col].mine) {
            // Reveal all mines
            setBoard(board.map((r, i) =>
                r.map((cell, j) => ({
                    ...cell,
                    revealed: cell.mine ? true : cell.revealed,
                }))
            ));
            setGameStatus("lose");
            return;
        }

        // Reveal cells recursively
        const visited: boolean[][] = Array.from({ length: ROWS }, () =>
            Array.from({ length: COLS }, () => false)
        );
        let revealCount = 0;
        const newBoard = board.map(row => row.map(cell => ({ ...cell })));

        function reveal(r: number, c: number) {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                visited[r][c] ||
                newBoard[r][c].flagged ||
                newBoard[r][c].revealed
            )
                return;
            visited[r][c] = true;
            newBoard[r][c].revealed = true;
            revealCount++;
            if (newBoard[r][c].numberBombs === 0 && !newBoard[r][c].mine) {
                // reveal neighbors
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (x !== 0 || y !== 0) {
                            reveal(r + x, c + y);
                        }
                    }
                }
            }
        }
        reveal(row, col);

        const newRevealed = revealed + revealCount;
        setBoard(newBoard);
        setRevealed(newRevealed);

        if (newRevealed === ROWS * COLS - MINES) {
            setGameStatus("win");
        }
    }

    // Handle right click (flag)
    function handleFlag(
        e: React.MouseEvent<HTMLTableCellElement>,
        row: number,
        col: number
    ) {
        e.preventDefault();
        if (gameStatus || board[row][col].revealed) return;
        const newBoard = board.map(rowArr => rowArr.map(cell => ({ ...cell })));
        if (newBoard[row][col].flagged) {
            newBoard[row][col].flagged = false;
            setFlags(flags - 1);
        } else {
            if (flags < MINES) {
                newBoard[row][col].flagged = true;
                setFlags(flags + 1);
            }
        }
        setBoard(newBoard);
    }

    return (
        <main className="flex flex-col items-center mt-6">
            <h1 className="text-2xl font-bold mb-4">Minesweeper</h1>
            <div className="flex gap-8 mb-4">
                <div className="flex gap-2">
                    <span className="font-semibold">Flags:</span>
                    <span>{flags}</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold">Mines:</span>
                    <span>{MINES}</span>
                </div>
            </div>
            <table className="border-collapse" style={{ userSelect: "none" }}>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => {
                                let cellStyle =
                                    "w-8 h-8 border border-black text-center align-middle font-bold cursor-pointer select-none transition";
                                if (cell.revealed) cellStyle += " bg-white";
                                else if (cell.flagged) cellStyle += " bg-black text-white";
                                else cellStyle += " bg-gray-300 hover:bg-gray-400";
                                if (cell.mine && cell.revealed) cellStyle += " bg-red-500 text-black";
                                return (
                                    <td
                                        key={j}
                                        className={cellStyle}
                                        onClick={() => handleCellClick(i, j)}
                                        onContextMenu={e => handleFlag(e, i, j)}
                                    >
                                        {cell.revealed && cell.mine && "💣"}
                                        {cell.revealed && !cell.mine && cell.numberBombs > 0 && cell.numberBombs}
                                        {!cell.revealed && cell.flagged && "🚩"}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {gameStatus && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-64 text-center">
                        <h2 className="text-xl font-bold mb-4">
                            {gameStatus === "win" ? "You Won!" : "You Lost!"}
                        </h2>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            onClick={startNewGame}
                        >
                            New Game
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}