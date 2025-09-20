// src/components/Game.tsx
import React,{useState} from 'react';
import Board from './Board';
import { initBoard, movePiece } from '../utils/gameLogic';

function Game() {
  const [board,setBoard]=useState(initBoard());
  // TODO: handle clicks and call movePiece
  return <Board board={board}/>;
}

export default Game;