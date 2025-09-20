// src/components/Board.tsx
import React from 'react';
import Square from './Square';

function Board({ board }) {
  return (
    <div className="grid grid-cols-8 gap-0">
      {board.map((row,i) => row.map((p,j)=>(
        <Square key={`${i}-${j}`} piece={p} pos={[i,j]} />
      )))}
    </div>
  );
}

export default Board;