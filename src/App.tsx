import { useState } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";

function App() {
  const [displayCount, setDisplay] = useState<Array<number | string>>([]);

  const showNumber = (numberValue: number) => {
    setDisplay((prevDisplay) => [...prevDisplay, numberValue]);
  };

  const showSymbol = (symbolValue: string) => {
    setDisplay((prevDisplay) => [...prevDisplay, symbolValue]);
  };

  return (
    <>
      <GlobalStyles />
      <div>
        {displayCount.length === 0 ? "Enter Calculations" : displayCount}
      </div>
      <NumberButtons onClick={showNumber} />
      <SymbolButtons onClick={showSymbol}/>
      <button>C</button>
    </>
  );
}

export default App;
