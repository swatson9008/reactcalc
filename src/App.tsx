import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";
import calcNumbers from "./components/calcNumbers";

function App() {
  const [displayCount, setDisplay] = useState<Array<string>>([]);
  const [displayMessage, setDisplayMessage] = useState<string>("Enter Calculations");

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
    const result: string = calcNumbers(
      parseInt(displayCount[0]),
      displayCount[1],
      parseInt(displayCount[2])
    );
    if (result.includes("bruh")) {
      setDisplay([]);
      setTimeout(() => setDisplayMessage(""), 0);
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
    if (displayCount.length === 2){alert('error')}
    if (displayCount.length === 0 || displayCount.length === 1){setDisplay((prevDisplay) => [...prevDisplay, "."]);}
    else { setDisplay((prevDisplay) => [
      ...prevDisplay.slice(0, -1),
      prevDisplay[prevDisplay.length - 1] + ".",
    ]);}
    console.log(displayCount)
  };

  return (
    <>
      <GlobalStyles />
      <div>{displayMessage}</div>
      <NumberButtons onClick={showNumber} />
      <SymbolButtons onClick={showSymbol} />
      <button onClick={handleEqualsClick}>=</button>
      <button onClick={handleClearClick}>C</button>
      <button onClick={handleDotClick}>.</button>
    </>
  );
}

export default App;
