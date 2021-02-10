import React from "react";

import Header from "./features/header/Header";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Friends List</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <div className="todoapp">
            <Header />
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
