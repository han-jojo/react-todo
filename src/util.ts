import { ITodoCategory, TODO_STORAGE } from "./atoms";

export const handleSaveTodoInLocalStorage = (result: ITodoCategory): void => {
    return localStorage.setItem(TODO_STORAGE, JSON.stringify(result));
};
