import { FC } from 'react';
import { Board } from '../board/board';
import { squareStatus } from '../../types';
import { useCalculateWinner } from '../../hooks/useCalculateWinner';
import './game.css';

export interface Props {
  isXNext: boolean;
  status: squareStatus[];
  changeStatus: (index: number) => void;
}

export const Game: FC<Props> = ({ isXNext, status, changeStatus }) => {
  const winner = useCalculateWinner(status);
  const isGameEnd = !!winner;
  const nextPlayer = isXNext ? 'X' : 'O';
  const gameStatus = winner
    ? `Winner: ${winner}`
    : `Next player: ${nextPlayer}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board {...{ status, changeStatus, isGameEnd }} />
      </div>
      <div className="game-info">
        <div>{gameStatus}</div>
        <ol>todo</ol>
      </div>
    </div>
  );
};
