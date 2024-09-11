import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

interface CreateToDoProps {
  category: string;
}

function CreateToDo({ category }: CreateToDoProps) {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useRecoilState<IToDo[]>(toDoState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newToDo = { id: Date.now(), text: toDo, category };
    setToDos((oldToDos: IToDo[]) => [...oldToDos, newToDo]);
    setToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        placeholder="Add a to do"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateToDo;
