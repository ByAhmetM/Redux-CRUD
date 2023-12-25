import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/actions/todoAction";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(removeTodo(todo.id)))
      .catch(() => alert("silme işleminde sorun var"));
  };

  const updateStatus = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)))
      .catch(() => alert("isdone güncellenemedi"));
  };

  return (
    <div className=" border shadow shadow-lg  p-4  my-5 ">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor."}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(true)} className="btn btn-primary ">
        Düzenle
      </button>
      <button onClick={updateStatus} className="btn btn-success mx-3  ">
        {todo.is_done ? "Devam Et" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
