import React from 'react';

interface NumberButtonsProps {
  onClick: (numberValue: string) => void;
}

const NumberButtons: React.FC<NumberButtonsProps> = ({ onClick }) => {
  const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div>
      {numbers.map((number) => (
        <button key={number} onClick={() => onClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberButtons;
