import { useState, useEffect } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";
import calcNumbers from "./components/calcNumbers";
import { StyledMessage } from "./components/styles/displayMessage.styled";
import { StyledClicks } from "./components/styles/handleclicks.styled";
import { StyledHandles } from "./components/styles/handleButtons.styled";
import { StyledEquals } from "./components/styles/handleButtons.styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [displayCount, setDisplay] = useState<Array<any>>([]);
  const [displayMessage, setDisplayMessage] =
    useState<string>("Enter Calculations");

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

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
      alert("bruh");
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
    if (
      displayCount.length === 0 || // Only add "0." if there are no items
      (displayCount.length === 1 && isNaN(Number(displayCount[0]))) // Only add "0." if the first item is not a valid number
    ) {
      setDisplay((prevDisplay) => [...prevDisplay, "0."]);
    } 

    else if (
      displayCount.length === 2  && !String(displayCount[displayCount.length - 1]).includes(".")
    ) {
      setDisplay((prevDisplay) => [...prevDisplay, "0."]);
    }
    else if (!String(displayCount[displayCount.length - 1]).includes(".")) {
      // Add "." only if the last item does not already include "."
      setDisplay((prevDisplay) => [
        ...prevDisplay.slice(0, -1),
        prevDisplay[prevDisplay.length - 1] + ".",
      ]);
    }
  };

  const handleBackClick = () => {
    if (displayCount.length === 0) {
      return alert("error");
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
      <GlobalStyles dark={isDarkMode} />
      <div className="DMSwitch">
        <DarkModeSwitch
          style={{ marginTop: "0" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}
        />
      </div>
      <div className="mainContainer">
        <StyledMessage dark={isDarkMode}>{displayMessage}</StyledMessage>
        <div className="symbolButtons">
          <SymbolButtons onClick={showSymbol} />
        </div>
        <div className="numButtons">
          <NumberButtons onClick={showNumber} dark={isDarkMode} />
        </div>
        <StyledClicks>
          <StyledHandles onClick={handleClearClick}>C</StyledHandles>
          <StyledHandles onClick={handleDotClick}>.</StyledHandles>
          <StyledHandles onClick={handleBackClick}>↵</StyledHandles>
          <StyledEquals onClick={handleEqualsClick}>=</StyledEquals>
        </StyledClicks>
      </div>
    </>
  );
}

export default App;
