import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";
import calcNumbers from "./components/calcNumbers";

function App() {
  const [displayCount, setDisplay] = useState<Array<string>>([]);
  const [displayMessage, setDisplayMessage] = useState("Enter Calculations");

  useEffect(() => {
    if (displayCount.length === 0) {
      setDisplayMessage("Enter Calculations");
    } else {
      setDisplayMessage(displayCount.join(" "));
    }
  }, [displayCount]);

  const showNumber = (numberValue: string) => {
    if (
      displayCount.length === 0 ||
      isNaN(Number(displayCount[displayCount.length - 1]))
    ) {
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
    if (displayCount.length === 0 || displayCount.length === 2) {
      return alert("error!");
    }
    if (displayCount.length === 3) {
      const result: string = calcNumbers(
        parseInt(displayCount[0]),
        displayCount[1],
        parseInt(displayCount[2])
      );
      if (result.startsWith("Alert: ")) {
        setDisplay([]);
        setTimeout(() => setDisplayMessage(''), 0);
      } else {
        setDisplay([result, symbolValue]);
      }
    } else {
      setDisplay((prevDisplay) => [prevDisplay[0], symbolValue]);
      console.log(displayCount);
    }
  };
  

  return (
    <>
      <GlobalStyles />
      <div>{displayMessage}</div>
      <NumberButtons onClick={showNumber} />
      <SymbolButtons onClick={showSymbol} />
      <button>C</button>
    </>
  );
}

export default App;
