import React, { useState } from 'react';
import './App.css';
import { type } from 'os';

function App() {

  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  return (
    <div className="App">
      <div>
        <h2>TODO</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={() => {}} className="inputText" placeholder="タスクを入力" />
          <input type="submit" value="Add" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
