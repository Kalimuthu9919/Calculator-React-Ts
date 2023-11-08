import { useState } from "react";
import "./App.css";

function Calculator() {
  const [Value, setValue] = useState<string>("");

  const handleButtonClick = (buttonValue: string) => {
    if (buttonValue === "=") {
      try {
        const result = eval(Value);
        setValue(result);
      } catch (error) {
        setValue("Error");
      }
    } else if (buttonValue === "AC") {
      setValue("");
    } else if (buttonValue === "DE") {
      if (typeof Value === "string" && Value.length > 0) {
        const newValue = Value.slice(0, -1);
        setValue(newValue);
      }
    } else if (buttonValue === ".") {
      if (typeof Value === "string" && !Value.includes(".")) {
        setValue(Value + ".");
      }
    } else {
      setValue(Value + buttonValue);
    }
  };

  return (
    <div className=" container ">
      <div className=" calculator">
        <form action="">
          <div className="display">
            <input type="button" value={Value}></input>
          </div>
          <div>
            <button type="button" onClick={() => handleButtonClick("AC")}>
              AC
            </button>
            <button type="button" onClick={() => handleButtonClick("DE")}>
              DE
            </button>
            <button type="button" onClick={() => handleButtonClick(".")}>
              .
            </button>
            <button type="button" onClick={() => handleButtonClick("/")}>
              /
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButtonClick("7")}>
              7
            </button>
            <button type="button" onClick={() => handleButtonClick("8")}>
              8
            </button>
            <button type="button" onClick={() => handleButtonClick("9")}>
              9
            </button>
            <button type="button" onClick={() => handleButtonClick("*")}>
              *
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButtonClick("4")}>
              4
            </button>
            <button type="button" onClick={() => handleButtonClick("5")}>
              5
            </button>
            <button type="button" onClick={() => handleButtonClick("6")}>
              6
            </button>
            <button type="button" onClick={() => handleButtonClick("+")}>
              +
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButtonClick("1")}>
              1
            </button>
            <button type="button" onClick={() => handleButtonClick("2")}>
              2
            </button>
            <button type="button" onClick={() => handleButtonClick("3")}>
              3
            </button>
            <button type="button" onClick={() => handleButtonClick("-")}>
              -
            </button>
          </div>
          <div>
            <button type="button" onClick={() => handleButtonClick("00")}>
              00
            </button>
            <button type="button" onClick={() => handleButtonClick("0")}>
              0
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("=")}
              className="equal"
            >
              =
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
