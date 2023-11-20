import React, { useState } from 'react';
import './App.css';
import { type } from 'os';

function App() {

  // inputValueはテキストフィールドに入力した値

  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // リロード回避
    e.preventDefault()
    // 新しいTODOの作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    }
    setTodos([newTodo, ...todos])
    // 投稿した後は空にする
    setInputValue("")
  }

  // 編集
  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue =inputValue
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const handleDelete = (id: number) => {
    //idが正しくないのは残す。正しいと消す。
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>TODO</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" placeholder="タスクを入力" />
          <input type="submit" value="Add" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            // mapを使っているので、todosのデータが5つあった場合はliタグが5つ生成させる
            <li key={todo.id}>
              {todo.inputValue}
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
