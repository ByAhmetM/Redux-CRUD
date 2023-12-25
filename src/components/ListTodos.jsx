import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  const state = useSelector((store) => store);
  return (
    <div>
      {state.todos?.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ListTodos;
