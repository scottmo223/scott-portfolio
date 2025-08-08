"use client";
import React, { useState, useRef } from "react";

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
    const longPressTimeout = useRef<NodeJS.Timeout | null>(null);
    const wasLongPressed = useRef(false);
    const suppressClick = useRef(false);

    function startNewGame() {
        setBoard(generateBoard());
        setRevealed(0);
        setFlags(0);
        setGameStatus(null);
    }

    //left click (reveal)
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

        //reveal cells
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

    // right click (flag)
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

    // mobile touch events
    function handleTouchStart(row: number, col: number) {
        wasLongPressed.current = false;
        longPressTimeout.current = setTimeout(() => {
            wasLongPressed.current = true;
            handleFlag({ preventDefault: () => { } } as any, row, col);
        }, 500); // 500ms threshold for long press
    }

    function handleTouchEnd() {
        if (longPressTimeout.current) {
            clearTimeout(longPressTimeout.current);
            longPressTimeout.current = null;
        }
        if (wasLongPressed.current) {
            suppressClick.current = true;
        }
    }



    return (
        <div className="w-full">
            <main className="flex flex-col items-center mt-6">
                <h1 className="text-2xl font-bold mb-4">Minesweeper</h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:mr-8 md:w-64 mb-4 md:mb-0 relative">
                        <h2 className="text-lg font-semibold mb-2">How to Play</h2>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li><strong>Left Click</strong> (Tap on mobile): Reveal the cell</li>
                            <li><strong>Right Click</strong> (Long Press on mobile): Flag or unflag a cell</li>
                            <li>Reveal all safe cells to win</li>
                        </ul>
                        {/* Modal */}
                        {gameStatus && (
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 pointer-events-none">
                                <div className="bg-white p-6 rounded shadow-md w-64 text-center pointer-events-auto">
                                    <h2 className="text-xl font-bold mb-4 text-black">
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
                    </div>
                    <div className="flex-1 flex flex-col items-center">
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
                                                "w-8 h-8 border border-black text-center align-middle font-bold cursor-pointer select-none transition text-black";
                                            if (cell.revealed) cellStyle += " bg-white";
                                            else if (cell.flagged) cellStyle += " bg-black text-white";
                                            else cellStyle += " bg-gray-300 hover:bg-gray-400";
                                            if (cell.mine && cell.revealed) cellStyle += " bg-red-500 text-black";
                                            return (
                                                <td
                                                    key={j}
                                                    className={cellStyle}
                                                    onClick={() => {
                                                        if (suppressClick.current) {
                                                            suppressClick.current = false;
                                                            return;
                                                        }
                                                        handleCellClick(i, j);
                                                    }}
                                                    onContextMenu={e => handleFlag(e, i, j)}
                                                    onTouchStart={() => handleTouchStart(i, j)}
                                                    onTouchEnd={() => handleTouchEnd()}
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
                    </div>
                </div>
            </main>
        </div>
    );
}