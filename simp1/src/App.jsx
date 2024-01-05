import { useState } from "react";

function App() {
  const [array, setArray] = useState(["A", "B", "C", "D", "E"]);

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  function removeLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeLetter("A")}>Remove all Letter A</button>
      <br />
      <button onClick={() => addLetterStart(["R"])}>add R to start</button>
      <br />
      <button onClick={() => addLetterEnd("O")}>Add O to end.</button>
      <br />
      <br />
      {array.join(", ")}
    </>
  );
}

export default App;
