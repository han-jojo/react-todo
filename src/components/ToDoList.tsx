import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  // const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
  //   setCategory(event.currentTarget.value as any);
  // };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      {/* <CreateToDo /> */}
      {
        Object.keys(toDos).map((boardId => (
          <ToDo key={boardId} boardId={boardId} toDos={toDos[boardId]} />
        )))
      }
    </div>
  );
}

export default ToDoList;
