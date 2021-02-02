import { FC } from 'react';

interface IProps {
  value?: null | 'o' | 'x';
}

export const Square: FC<IProps> = ({ value = null }) => (
  <button className="square" type="button">
    {value}
  </button>
);
