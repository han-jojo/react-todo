import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IToDo, ITodoCategory, toDoState } from "../atoms";
import {
  Area,
  Card,
  DeleteBoardButton,
  DeleteButton,
  Form,
  Title,
  Wrapper,
} from "../styles/components";
import { handleSaveTodoInLocalStorage } from "../util";

interface IBoardProps {
  boardId: string;
  toDos: IToDo[];
}

interface IForm {
  toDo: string;
}

function ToDo({ boardId, toDos }: IBoardProps) {
  const [boards, setBoards] = useRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };

    setBoards((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });

    setValue("toDo", "");
  };

  const onDelete = (toDo: IToDo) => {
    const sourceBoard = boards[boardId];
    const deletedTodos = sourceBoard.filter((row) => row.id !== toDo.id);

    setBoards((allBoards) => {
      return {
        ...allBoards,
        [boardId]: deletedTodos,
      };
    });
  };

  const onBoardDelete = (boardId: string) => {
    setBoards((todos: ITodoCategory) => {
      const copiedTodos: ITodoCategory = { ...todos };
      delete copiedTodos[boardId];
      const result: ITodoCategory = copiedTodos;
      return result;
    });
  };

  useEffect(() => {
    handleSaveTodoInLocalStorage(boards);
  }, [boards]);

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <DeleteBoardButton onClick={() => onBoardDelete(boardId)}>
        ✕
      </DeleteBoardButton>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`무엇을 하시겠습니까?`}
        />
      </Form>
      <Area>
        {toDos.map((toDo) => (
          <Card key={toDo.id}>
            {toDo.text}
            <DeleteButton onClick={() => onDelete(toDo)}>✕</DeleteButton>
          </Card>
        ))}
      </Area>
    </Wrapper>
  );
}

export default ToDo;
