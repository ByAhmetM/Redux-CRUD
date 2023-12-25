import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/actions/todoAction";
import axios from "axios";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    axios.post("/todos", newTodo).then(() => dispatch(addTodo(newTodo)));

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 ">
      <input
        className="form-control"
        type="text"
        placeholder="Ör: Typescript Çalış"
      />
      <button type="submit" className="btn btn-warning ">
        Ekle
      </button>
    </form>
  );
};

export default AddTodo;
