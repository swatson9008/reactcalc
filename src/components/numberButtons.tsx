import React from 'react';
import { NumButtons } from './styles/numberButtons.styled';

interface NumberButtonsProps {
  onClick: (numberValue: string) => void;
  dark: boolean
}

const NumberButtons: React.FC<NumberButtonsProps> = ({ onClick, dark }) => {
  const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className='numSheet'>
      {numbers.map((number) => (
        <NumButtons dark={dark} key={number} onClick={() => onClick(number)}>
          {number}</NumButtons>
      ))}
    </div>
  );
};

export default NumberButtons;
