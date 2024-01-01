import { TodoList } from "./todolist";
import { TodoListClass } from "./TodoClass";

import { Eman } from "./Eman";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
      this belongs to
      <Eman name="turtle" number={12} style="top" />
      <Eman name="snake" number={23} style="tully" />
      <Eman name="Billy bob joel" number={8} style="tux">
        Asleeeeeeeeep
      </Eman>
      <TodoListClass />
    </>
  );
}

export default App;
