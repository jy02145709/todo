import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";

function LocalStorage() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, [setToDos]);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return toDos;
}

export default LocalStorage;
