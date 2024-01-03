// import { TodoList } from "./todolist";
// import { TodoListClass } from "./TodoClass";

// import { Eman } from "./Eman";
import { useState } from "react";

function App() {
  const [name, setName] = useState("eman");
  function handleClick() {
    setName("Bob");
  }

  return (
    <>
      <h1 onClick={handleClick}>hi{name}</h1>

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
