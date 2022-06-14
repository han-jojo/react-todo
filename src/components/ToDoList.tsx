import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { ITodoCategory, toDoState } from "../atoms";
import { Form, Main } from "../styles/components";
import { handleSaveTodoInLocalStorage } from "../util";
import ToDo from "./ToDo";

interface IBoard {
  boardName: string;
}

function ToDoList() {
  const [boards, setBoards] = useRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IBoard>();

  const onValid = ({ boardName }: IBoard) => {
    setBoards((allBoards) => {
      const result: ITodoCategory = {
        ...allBoards,
        [boardName]: [],
      };

      return result;
    });

    setValue("boardName", "");
  };

  useEffect(() => {
    handleSaveTodoInLocalStorage(boards);
  }, [boards]);

  return (
    <div>
      <h1>J3y3h0's 투두리스트</h1>
      <hr />
      
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("boardName", { required: true })}
          type="text"
          placeholder={`새로운 항목을 입력하세요.`}
        />
      </Form>
      <Main>
        {Object.keys(boards).map((boardId) => (
          <ToDo key={boardId} boardId={boardId} toDos={boards[boardId]} />
        ))}
      </Main>
    </div>
  );
}

export default ToDoList;
