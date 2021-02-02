import { FC } from 'react';
import { Game } from '../components/game/game';
import { useHandleBoard } from '../hooks/useHandleBoard';

export const TicTacToe: FC = () => {
  const { isXNext, status, changeStatus } = useHandleBoard();

  return <Game {...{ isXNext, status, changeStatus }} />;
};
