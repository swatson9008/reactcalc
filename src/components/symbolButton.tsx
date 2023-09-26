import React from 'react';
import { SymbolButtonsStyle } from './styles/symbolButtons.styled';

interface SymbolButtonProps {
  onClick: (symbolValue: string) => void;
}

const SymbolButtons: React.FC<SymbolButtonProps> = ({ onClick }) => {
  const symbols: string[] = ["+", "-", "/", "*"];

  return (
    <div className='symbolSheet'>
      {symbols.map((symbol) => (
        <SymbolButtonsStyle key={symbol} onClick={() => onClick(symbol)}>
          {symbol}
        </SymbolButtonsStyle>
      ))}
    </div>
  );
};

export default SymbolButtons;
