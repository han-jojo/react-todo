import { atom } from "recoil";

export const TODO_STORAGE = "TODO_STORAGE";
const localStorageBoards: string = localStorage.getItem(TODO_STORAGE) || "{}";
const savedLocalStorageTodo = JSON.parse(localStorageBoards);

export interface ITodoCategory {
  [key: string]: IToDo[];
}

export interface IToDo {
  id: number;
  text: string;
}

export const toDoState = atom<ITodoCategory>({
  key: "toDo",
  default: savedLocalStorageTodo,
});
