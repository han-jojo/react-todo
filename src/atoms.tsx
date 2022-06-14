import { atom } from "recoil";

export const TODO_STORAGE = "TODO_STORAGE";
const localStorageTodo: string = localStorage.getItem(TODO_STORAGE) || "{}";
const parsedLocalStorageTodo = JSON.parse(localStorageTodo);

export interface ITodoCategory {
  [key: string]: IToDo[];
}

export interface IToDo {
  id: number;
  text: string;
}

export const toDoState = atom<ITodoCategory>({
  key: "toDo",
  default: parsedLocalStorageTodo,
});
