import React from 'react'
import { useState } from "react";

function CheckListItem({ yapilacaklar, check }) {
  return (
    <div>
      <input type="checkbox" checked={check} />
      <span>{yapilacaklar}</span>
    </div>
  );
}

function App() {
  const [checkList, setCheckList] = useState([
    {
      yapilacaklar: "shopping",
      check: true,
    },
    {
      yapilacaklar: "pay bills",
      check: true,
    },
    {
      yapilacaklar: "coding",
      check: false,
    },
  ]);

  return (
    <div className="App container">
      {
      checkList.map((todo, index) => (
        <CheckListItem
          yapilacaklar={todo.yapilacaklar}
          check={todo.check}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;