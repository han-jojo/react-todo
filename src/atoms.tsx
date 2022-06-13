import { atom } from "recoil";

export interface ITodoCategory {
  [key: string]: IToDo[];
};

export interface IToDo {
  id: number;
  text: string;
};

export const toDoState = atom<ITodoCategory>({
  key: "toDo",
  default: {
    "To do": [],
    "Doing": [],
    "Done": [],
  },
});
