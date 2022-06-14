import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
import {
  Area,
  Card,
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

  useEffect(() => {
    handleSaveTodoInLocalStorage(boards);
  }, [boards]);

  return (
    <Wrapper>
      <Title>{boardId}</Title>
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
            <DeleteButton onClick={() => onDelete(toDo)}>❌</DeleteButton>
          </Card>
        ))}
      </Area>
    </Wrapper>
  );
}

export default ToDo;
