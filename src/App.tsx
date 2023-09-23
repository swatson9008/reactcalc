import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";
import calcNumbers from "./components/calcNumbers";

function App() {
  const [displayCount, setDisplay] = useState<Array<string>>([]);
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
    console.log(displayCount);
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

  const runCalculations = async (symbolValue: string) => {
    const result: string = calcNumbers(
      parseFloat(displayCount[0]),
      displayCount[1],
      parseFloat(displayCount[2])
    );

    if (result === "nope") {
      alert('bruh')
      setDisplay([]);
      console.log(displayCount)
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
    console.log(displayCount);
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
