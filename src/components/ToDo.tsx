import { useRecoilState } from "recoil";
import { toDoState, categoriesState } from "../atoms";
import styled from "styled-components";

const ToDoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }
`;

interface ToDoProps {
  id: number;
  text: string;
  category: string;
}

function ToDo({ id, text, category }: ToDoProps) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [categories] = useRecoilState(categoriesState);

  const handleDelete = () => {
    setToDos((oldToDos) => oldToDos.filter((toDo) => toDo.id !== id));
  };

  const handleChangeCategory = (newCategory: string) => {
    setToDos((oldToDos) =>
      oldToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: newCategory } : toDo
      )
    );
  };

  return (
    <ToDoItem>
      <span>{text}</span>
      <ButtonGroup>
        {Object.keys(categories)
          .filter((cat) => cat !== category)
          .map((cat) => (
            <ActionButton key={cat} onClick={() => handleChangeCategory(cat)}>
              Move to {cat}
            </ActionButton>
          ))}
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ButtonGroup>
    </ToDoItem>
  );
}

export default ToDo;
