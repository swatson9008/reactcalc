import { useState, useEffect, useCallback } from "react";
import GlobalStyles from "./components/styles/global";
import NumberButtons from "./components/numberButtons";
import SymbolButtons from "./components/symbolButton";
import calcNumbers from "./components/calcNumbers";
import { StyledMessage } from "./components/styles/displayMessage.styled";
import { StyledClicks } from "./components/styles/handleclicks.styled";
import { StyledHandles } from "./components/styles/handleButtons.styled";
import { StyledEquals } from "./components/styles/handleButtons.styled";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [displayCount, setDisplay] = useState<Array<string | number>>([]);
  const [displayMessage, setDisplayMessage] = useState<string>("Enter Calculations");
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
      (typeof displayCount[displayCount.length - 1] === "string" &&
        isNaN(Number(displayCount[displayCount.length - 1])))
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
      parseFloat(displayCount[0] as string),
      displayCount[1] as string,
      parseFloat(displayCount[2] as string)
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
      displayCount.length === 0 ||
      (displayCount.length === 1 &&
        typeof displayCount[0] === "string" &&
        isNaN(Number(displayCount[0])))
    ) {
      setDisplay((prevDisplay) => [...prevDisplay, "0."]);
    } else if (
      displayCount.length === 2 &&
      typeof displayCount[1] === "string" &&
      !displayCount[1].includes(".")
    ) {
      setDisplay((prevDisplay) => [...prevDisplay, "0."]);
    } else if (
      typeof displayCount[displayCount.length - 1] === "string" &&
      !displayCount[displayCount.length - 1].includes(".")
    ) {
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
      const updatedValue =
        typeof displayCount[latestIndex] === "string"
          ? displayCount[latestIndex].slice(0, -1)
          : "";
      const updatedDisplay = [...displayCount];
      updatedDisplay[latestIndex] = updatedValue;
      setDisplay(updatedDisplay);
    }
  };

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    console.log(event.key)
    switch (event.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        showNumber(event.key);
        break;
      case '+':
      case '-':
        showSymbol(event.key);
        break;
      case '*':
        showSymbol("x");
        break;
      case '/':
        showSymbol("÷");
        break
      case '=':
      case 'Enter':
        handleEqualsClick();
        break;
      case 'Backspace': 
        handleBackClick();
        break;
      case '.':
        handleDotClick();
        break;
      default:
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showNumber, showSymbol, runCalculations, handleEqualsClick, handleBackClick, handleDotClick]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, [handleKeyPress]);

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
