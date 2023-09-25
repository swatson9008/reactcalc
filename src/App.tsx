import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";
import calcNumbers from "./components/calcNumbers";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [displayCount, setDisplay] = useState<Array<any >>([]);
  const [displayMessage, setDisplayMessage] =
    useState<string>("Enter Calculations");

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
  };

  const showSymbol = (symbolValue: string) => {
    if (displayCount.length === 0 || displayCount.length === 2) {
      return alert("error!");
    }
    if (displayCount.length === 3) {
      runCalculations(symbolValue);
    } else {
      setDisplay((prevDisplay) => [prevDisplay[0], symbolValue]);
    }
  };

  const runCalculations = (symbolValue: string) => {
    const result: string | undefined = calcNumbers(
      parseFloat(displayCount[0]),
      displayCount[1],
      parseFloat(displayCount[2])
    );

    if (result === "nope") {
      alert('bruh')
      setDisplay([]);
      return;
    }

    if (symbolValue === "=") {
      setDisplay([result]);
    } else {
      setDisplay([result, symbolValue]);
    }
  };

  const handleEqualsClick = () => {
    if (isNaN(Number(displayCount[3]))) {
      runCalculations("=");
    } else {
      alert("error");
    }
  };

  const handleClearClick = () => {
    setDisplay([]);
    setDisplayMessage("Enter Calculations");
  };

  const handleDotClick = () => {
    if (displayCount.length === 2) {
      alert("error");
    } else if (
      displayCount.length === 0 ||
      isNaN(Number(displayCount[displayCount.length - 1]))
    ) {
      setDisplay((prevDisplay) => [...prevDisplay, "0."]);
    }
    if (String(displayCount[displayCount.length - 1]).includes(".")) {
      return alert("error");
    } else {
      setDisplay((prevDisplay) => [
        ...prevDisplay.slice(0, -1),
        prevDisplay[prevDisplay.length - 1] + ".",
      ]);
    }
  };

  const handleBackClick = () => {
    if (displayCount.length === 0) {
      return alert('error');
    } else {
      const latestIndex = displayCount.length - 1;
      const updatedValue = displayCount[latestIndex].slice(0, -1);
      const updatedDisplay = [...displayCount];
      updatedDisplay[latestIndex] = updatedValue;
      setDisplay(updatedDisplay);
    }
  };
  

  return (
    <>
      <GlobalStyles />
      <div className="mainContainer">
        <div className="displayMessage">{displayMessage}</div>
        <div className="symbolButtons"><SymbolButtons onClick={showSymbol} /></div>
        <div className="numButtons"><NumberButtons onClick={showNumber} /></div>
        <div className="handleClicks">
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleDotClick}>.</button>
        <button onClick={handleBackClick}>↵</button></div>
      </div>
    </>
  );
}

export default App;
