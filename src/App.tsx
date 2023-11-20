import React from 'react';
import './App.css';

function App() {
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
