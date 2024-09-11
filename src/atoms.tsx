import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoriesState = atom<{ [key: string]: IToDo[] }>({
  key: "categoriesState",
  default: { TO_DO: [], DOING: [], DONE: [] },
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDoState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoriesState);
    return toDos.filter((toDo: IToDo) => category[toDo.category]);
  },
});
