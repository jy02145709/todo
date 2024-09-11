import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoriesState, toDoState, IToDo } from "../atoms";
import CreateToDo from "./CreateToDo";
import CreateCategory from "./CreateCategory";
import ToDo from "./ToDo";

function ToDoList() {
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useState<string>("TO_DO");
  const [toDos] = useRecoilState<IToDo[]>(toDoState);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const filteredToDos = toDos.filter((toDo) => toDo.category === category);

  return (
    <div>
      <h1>To Do List</h1>
      <CreateCategory />
      <select value={category} onChange={handleCategoryChange}>
        {Object.keys(categories).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <CreateToDo category={category} />
      <ul>
        {filteredToDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
