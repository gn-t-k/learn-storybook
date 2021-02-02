import { useState } from 'react';
import { squareStatus } from '../types';

type HandleBoard = () => {
  isXNext: boolean;
  status: squareStatus[];
  changeStatus: (index: number) => void;
};

export const useHandleBoard: HandleBoard = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState<squareStatus[]>(Array(9).fill(null));

  const changeTurn = () => {
    setIsXNext(!isXNext);
  };
  const changeStatus = (index: number) => {
    if (status[index] !== null) return;
    setStatus(
      status.map((s, i) => {
        if (i !== index) return s;

        return isXNext ? 'X' : 'O';
      }),
    );
    changeTurn();
  };

  return { isXNext, status, changeStatus };
};
