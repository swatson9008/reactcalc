import { useState } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";

function App() {
  const [displayCount, setDisplay] = useState<Array<string>>([]);

  const showNumber = (numberValue: string) => {
    if (displayCount.length === 0 || isNaN(Number(displayCount[displayCount.length - 1]))) {
      setDisplay((prevDisplay) => [...prevDisplay, numberValue]);
    } else {
      setDisplay((prevDisplay) => [
        ...prevDisplay.slice(0, -1),
        prevDisplay[prevDisplay.length - 1] + numberValue,
      ]);
    }
    console.log(displayCount);
  };
  

  const showSymbol = (symbolValue: string) => {
    if (displayCount.length === 0 || displayCount.length === 2){return alert("error!")}
    if (displayCount.length === 3){console.log('success')}
    else {setDisplay((prevDisplay) => [prevDisplay[0], symbolValue]); console.log(displayCount);}
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
