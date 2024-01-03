// import { TodoList } from "./todolist";
// import { TodoListClass } from "./TodoClass";

// import { Eman } from "./Eman";
import { useState } from "react";

function App() {
  const [name, setName] = useState(() => {
    console.log("name changed");
    return "Joe";
  });

  const [age, setAge] = useState(0);
  function handleClick() {
    setName("Bob");

    setAge((currentAge) => {
      return currentAge + 1;
    });
    setAge((currentAge) => {
      return currentAge + 1;
    });
  }

  return (
    <>
      <h1 onClick={handleClick}>
        hi{name}
        {age}
      </h1>

      {/* <h1>Todo List</h1>
      <TodoList />
      this belongs to
      <Eman name="turtle" number={12} style="top" />
      <Eman name="snake" number={23} style="tully" />
      <Eman name="Billy bob joel" number={8} style="tux">
        Asleeeeeeeeep
      </Eman>
      <TodoListClass /> */}
    </>
  );
}

export default App;
