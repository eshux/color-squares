import React, { FC } from 'react';
import './Square.css';

type Props = {
  color: string;
  num: number;
  visible: boolean;
  onClick:() => void;
};

const Square: FC<Props> = ({ color, num, visible, onClick }) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={`shape ${!visible && 'text-color'}`}
      style={{ backgroundColor: `${color}` }}
    >
      {num !== 0 && num}
    </button>
  );
};

export default Square;
