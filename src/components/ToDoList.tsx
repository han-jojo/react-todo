import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
import { Form } from "../styles/components";
import ToDo from "./ToDo";

interface IBoard {
  boardName: string;
}

function ToDoList() {
  const [boards, setBoards] = useRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IBoard>();

  const onValid = ({ boardName }: IBoard) => {
    setBoards((allBoards) => {
      return {
        ...allBoards,
        [boardName]: [],
      };
    });

    setValue("boardName", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("boardName", { required: true })}
          type="text"
          placeholder={`새로운 항목을 입력하세요.`}
        />
      </Form>
      {/* <CreateToDo /> */}
      {Object.keys(boards).map((boardId) => (
        <ToDo key={boardId} boardId={boardId} toDos={boards[boardId]} />
      ))}
    </div>
  );
}

export default ToDoList;
