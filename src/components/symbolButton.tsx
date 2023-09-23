import React from 'react';

interface SymbolButtonProps {
  onClick: (symbolValue: string) => void;
}

const SymbolButtons: React.FC<SymbolButtonProps> = ({ onClick }) => {
  const symbols: string[] = ["+", "-", "/", "*"];

  return (
    <div>
      {symbols.map((symbol) => (
        <button key={symbol} onClick={() => onClick(symbol)}>
          {symbol}
        </button>
      ))}
    </div>
  );
};

export default SymbolButtons;
